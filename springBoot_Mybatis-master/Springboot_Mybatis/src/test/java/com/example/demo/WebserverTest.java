package com.example.demo;

import com.example.webserverinterfacenew.GetChartsWebserviceImpService;
import com.example.webserverinterfacenew.IGetChartWebservice;
import org.junit.Test;


public class WebserverTest {

    @Test
    public void dddd(){
        String AccesskeyOA = "zUvqpKadER2XglrBG3oR/H4V5Nz5zY5m+WVCqUCBoEkN4/M9w12xUdJr0gIYRftf";
        GetChartsWebserviceImpService gg = new GetChartsWebserviceImpService();
        IGetChartWebservice i = gg.getGetChartsWebserviceImpPort();
        String ddd = i.getPerSubInfo(AccesskeyOA);
        System.out.println(ddd);
}
}
