package com.ssafy.common.api.live.dto.request;

import lombok.Builder;
import lombok.Getter;

import java.sql.Timestamp;

@Getter
@Builder
public class LiveroomRegistForm {
    private  String title;

    private String thumbnail ;

    private Timestamp time ;

}
