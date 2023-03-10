import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { useSelector } from 'react-redux';
import axios from 'axios';
import FormData from 'form-data';
import BackToTop from '../AppBar/BackToTop';
import Divider from '@mui/material/Divider';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './PostRegister.css';

function PostRegister() {
  const navigate = useNavigate();
  const loginUser = useSelector(state => state.user.value);
  const [images, setImages] = useState([]);
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState(0);
  const [sale, setSale] = useState(true);
  const [saleprice, setSalePrice] = useState(0);
  const [typecategoryId, setTypeCategoryId] = useState(0);
  const [typeDetailId, setTypeDetailId] = useState(0);
  const [size, setSize] = useState('');
  const [brandcategoryId, setBrandCategoryId] = useState(0);
  const [content, setContent] = useState('');
  const [imageupload, setImageUpload] = useState([]);
  const [brandcate, setBrandCate] = useState([]);
  const [typecate, setTypeCate] = useState([]);

  const token = loginUser.token;

  const handleAddImages = event => {
    const imageLists = event;
    let imageUrlLists = [...images];
    let imageUploadLists = [...imageupload];

    imageUploadLists.push(event[0]);

    for (let i = 0; i < imageLists.length; i += 1) {
      const currentImageUrl = URL.createObjectURL(imageLists[i]);
      imageUrlLists.push(currentImageUrl);
    }

    if (imageUrlLists.length > 10) {
      imageUrlLists = imageUrlLists.slice(0, 10);
    }

    setImages(imageUrlLists);
    setImageUpload(imageUploadLists);
  };

  const handleDeleteImage = id => {
    setImages(images.filter((_, index) => index !== id));
    setImageUpload(images.filter((_, index) => index !== id));
  };

  useEffect(() => {
    axios
      .get('https://i8b204.p.ssafy.io/be-api/cate/brand')
      .then(res => setBrandCate(res.data))
  }, []);

  useEffect(() => {
    axios
      .get('https://i8b204.p.ssafy.io/be-api/cate/type')
      .then(res => setTypeCate(res.data))
  }, []);

  const saleStates = [
    {
      type: false,
      title: '?????? ??? ???',
    },
    {
      type: true,
      title: '??????',
    },
  ];

  const submitHandler = event => {
    event.preventDefault();
    const formData = new FormData();

    for (let i = 0; i < imageupload.length; i += 1) {
      formData.append('images', imageupload[i]);
    }

    axios
      .post('https://i8b204.p.ssafy.io/be-api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*',
        },
      })
      .then(res => {
        const data = {
          postImages: res.data,
          title,
          content,
          price,
          sale_price: saleprice,
          size,
          brandcategoryId,
          typecategoryId,
          typeDetailId,
        };
        // console.log(data)
        axios
          .post(`https://i8b204.p.ssafy.io/be-api/post`, data, {
            headers: { Authorization: token },
          })
          .then(res => {
            // console.log(res)
            navigate(`/post/${res.data}`);
          })
      })

    return false;
  };

  return (
    <div className="postregister">
      <BackToTop />
      <form onSubmit={submitHandler}>
        <div className="post_reg_file">
          <p>?????? ??????(10????????? ??????)</p>
          <div className="post_reg_prev">
            {images.length < 10 && <label htmlFor="post_reg_file">+</label>}
            {images.map((image, id) => (
              <div key={id} className="post_reg_prev_img">
                <div>
                  <img src={image} alt="????????????" />
                </div>
                <div>
                  <button type="button" onClick={() => handleDeleteImage(id)}>
                    X
                  </button>
                </div>
              </div>
            ))}
          </div>
          <input
            type="file"
            id="post_reg_file"
            multiple
            accept="image/*"
            onChange={event => handleAddImages(event.target.files)}
          />
        </div>
        <Divider sx={{ marginY: '1rem' }} />
        <div className="post_reg_title">
          <p>????????????</p>
          <input
            type="text"
            id="post_reg_title"
            name="title"
            placeholder="???????????? ??????????????????"
            onChange={event => setTitle(event.target.value)}
          />
        </div>
        <Divider sx={{ marginY: '1rem' }} />
        <div className="post_reg_price">
          <p>????????????</p>
          <input
            type="number"
            id="post_reg_price"
            name="price"
            placeholder="??????????????? ??????????????????"
            onChange={event => setPrice(event.target.value)}
          />
          <div className="post_reg_sale_state">
            <p>????????????</p>
            {saleStates.map(state => (
              <button
                key={state.type}
                type="button"
                onClick={() => setSale(state.type)}
                className={`${sale === state.type
                    ? 'post_reg_sale_btn'
                    : 'post_reg_sale_state_btn'
                  }`}
              >
                {state.title}
              </button>
            ))}
          </div>
          {sale && (
            <div className="post_reg_sale_price">
              <p>????????????</p>
              <input
                type="number"
                id="post_reg_sale_price"
                name="sale_price"
                placeholder="??????????????? ??????????????????"
                onChange={event => setSalePrice(event.target.value)}
              />
            </div>
          )}
        </div>
        <Divider sx={{ marginY: '1rem' }} />
        <div className="post_reg_category">
          <p>????????????</p>
          <div className="post_reg_category_div">
            <div className="post_reg_category_cloth">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">category</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={typecategoryId}
                  label="category"
                  onChange={event => setTypeCategoryId(event.target.value)}
                >
                  <MenuItem value="0">??????????????????</MenuItem>
                  {typecate.map(type => (
                    <MenuItem value={type.id} key={type.id}>
                      {type.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {typecategoryId === 1 && (
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">category</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={typeDetailId}
                    label="category"
                    onChange={event => setTypeDetailId(event.target.value)}
                  >
                    <MenuItem value="0">??????????????????</MenuItem>
                    <MenuItem value="11">?????????</MenuItem>
                    <MenuItem value="12">?????????</MenuItem>
                    <MenuItem value="13">??????</MenuItem>
                    <MenuItem value="14">??????</MenuItem>
                    <MenuItem value="15">?????? ??????</MenuItem>
                  </Select>
                </FormControl>
              )}
              {typecategoryId === 2 && (
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">category</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={typeDetailId}
                    label="category"
                    onChange={event => setTypeDetailId(event.target.value)}
                  >
                    <MenuItem value="0">??????????????????</MenuItem>
                    <MenuItem value="21">?????? ??????</MenuItem>
                    <MenuItem value="22">??????</MenuItem>
                    <MenuItem value="23">?????????</MenuItem>
                    <MenuItem value="24">?????? ?????????</MenuItem>
                  </Select>
                </FormControl>
              )}
              {typecategoryId === 3 && (
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">category</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={typeDetailId}
                    label="category"
                    onChange={event => setTypeDetailId(event.target.value)}
                  >
                    <MenuItem value="0">??????????????????</MenuItem>
                    <MenuItem value="31">??????</MenuItem>
                    <MenuItem value="32">??????</MenuItem>
                    <MenuItem value="33">????????????</MenuItem>
                    <MenuItem value="34">??? ??????</MenuItem>
                    <MenuItem value="35">?????? ??????</MenuItem>
                  </Select>
                </FormControl>
              )}
              {typecategoryId === 4 && (
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                  <InputLabel id="demo-select-small">category</InputLabel>
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={typeDetailId}
                    label="category"
                    onChange={event => setTypeDetailId(event.target.value)}
                  >
                    <MenuItem value="0">?????????????????? </MenuItem>
                    <MenuItem value="41">??????</MenuItem>
                    <MenuItem value="42">??????</MenuItem>
                    <MenuItem value="43">?????????</MenuItem>
                    <MenuItem value="44">??????</MenuItem>
                  </Select>
                </FormControl>
              )}
            </div>
            <div className="post_reg_category_brand">
              <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">brand</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={brandcategoryId}
                  label="brand"
                  onChange={event => setBrandCategoryId(event.target.value)}
                >
                  <MenuItem value="0">?????????????????? </MenuItem>
                  {brandcate.map(brand => (
                    <MenuItem value={brand.id} key={brand.id}>
                      {brand.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
        <Divider sx={{ marginY: '1rem' }} />
        <div className="post_reg_detail">
          <p>?????? ????????????</p>
          <textarea
            id="post_reg_detail"
            name="detail"
            placeholder="??????????????? ?????? ??????????????????&#13;&#10;ex) ?????? ??????, ???????????? ?????????, ???????????? ???????????? ??? ?????????"
            onChange={event => setContent(event.target.value)}
          />
        </div>
        <Divider sx={{ marginY: '1rem' }} />
        <div className="post_reg_size">
          <p>?????????</p>
          <textarea
            id="post_reg_size"
            name="size"
            placeholder="???????????? ?????? ??????????????????&#13;&#10;ex)????????????:40cm ??????:65cm"
            onChange={event => setSize(event.target.value)}
          />
        </div>
        <div className="submit_btn">
          <button type="submit">??????</button>
        </div>
      </form>
    </div>
  );
}

export default PostRegister;
