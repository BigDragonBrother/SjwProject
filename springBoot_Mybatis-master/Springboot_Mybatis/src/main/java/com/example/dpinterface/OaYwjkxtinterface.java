package com.example.dpinterface;


import com.example.webserverinterfacenew.GetChartsWebserviceImpService;
import com.example.webserverinterfacenew.IGetChartWebservice;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * OA运维监控系统接口
 *
 */
@RestController
@Controller
@RequestMapping("/oayw")
public class OaYwjkxtinterface {

    String AccesskeyOA = "zUvqpKadER2XglrBG3oR/H4V5Nz5zY5m+WVCqUCBoEkN4/M9w12xUdJr0gIYRftf";

    @RequestMapping("SendFile")
    public String SendFile(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getOrSendFile("sendFile",AccesskeyOA);
        return ddd;
    }

    @RequestMapping("receiveFile")
    public String receiveFile(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getOrSendFile("receiveFile", AccesskeyOA);
        return ddd;
    }

    @RequestMapping("getOnlineNum")
    public String getOnlineNum(){
        //收发文数据传输接口

        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getOnlineNum(AccesskeyOA);
        return ddd;
    }

    @RequestMapping("getMeetingInfo")
    public String getMeetingInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getMeetingInfo(AccesskeyOA);
        return ddd;
    }

    @RequestMapping("getPartyInfo")
    public String getPartyInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getPartyInfo(AccesskeyOA);
        return ddd;
    }

    @RequestMapping("getSubInfo")
    public String getSubInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getSubInfo(AccesskeyOA);
        return ddd;
    }

    @RequestMapping("getDubanInfo")
    public String getDubanInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getDubanInfo(AccesskeyOA);
        return ddd;
    }

//*************************0911新增*******************
    //每个会议室近三个月的使用次数
    @RequestMapping("getMeetingRoomCountInfo")
    public String getMeetingRoomCountInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getMeetingRoomCountInfo(AccesskeyOA);
        return ddd;
    }
    //每个会议室近三个月的使用率
    @RequestMapping("getMeetingRoomPercentInfo")
    public String getMeetingRoomPercentInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getMeetingRoomPercentInfo(AccesskeyOA);
        return ddd;
    }
    //近三个月人员办件数
    @RequestMapping("getPDSubInfo")
    public String getPDSubInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getPDSubInfo(AccesskeyOA);
        return ddd;
    }

    //办件办结率统计
    @RequestMapping("getPerBJInfo")
    public String getPerBJInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getPerBJInfo(AccesskeyOA);
        return ddd;
    }
    //各部门办件统计
    @RequestMapping("getPerSubInfo")
    public String getPerSubInfo(){
        //收发文数据传输接口
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getPerSubInfo(AccesskeyOA);
        return ddd;
    }

}
