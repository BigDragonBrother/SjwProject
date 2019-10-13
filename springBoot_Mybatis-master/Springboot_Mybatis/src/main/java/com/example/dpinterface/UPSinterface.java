package com.example.dpinterface;

import com.example.service.UpsService;
import com.example.service.UserService;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@Controller
@RequestMapping("/ups")
public class UPSinterface {

    @Resource
    private UpsService upsService;

    /**
     * 一级页ups数据接口
     * @return
     */
    @RequestMapping("/selectupsinfo")
    public Map<String, Object> selectupsinfo(){
        Map<String, Object> resMap = new HashMap<>();
        List<Map<String,Object>> list = upsService.selectupsinfo();
        if(list.size()>0){
            for(int i=0;i<list.size();i++){
                if("AU129".equals(list.get(i).get("varid"))){
                    resMap.put("rl",list.get(i).get("hvalue"));
                }
                if("AU130".equals(list.get(i).get("varid"))){
                    resMap.put("wd",list.get(i).get("hvalue"));
                }
                if("AU132".equals(list.get(i).get("varid"))){
                    resMap.put("sj",list.get(i).get("hvalue"));
                }
                if("AUZ111".equals(list.get(i).get("varid"))){
                    resMap.put("wdzt",list.get(i).get("hvalue"));
                }
            }
        }else{
            resMap.put("rl","");
            resMap.put("wd","");
            resMap.put("sj","");
            resMap.put("wdzt","");
        }
            return resMap;
    }

    /**
     * 一级页数据
     * 涉密机房温湿度
     * @return
     */
    @RequestMapping("/selectsmjfwsd")
    public Map<String, Object> selectsmjfwsd(){
        Map<String, Object> resMap = new HashMap<>();
        List<Map<String,Object>> list = upsService.selectsmjfwsd();
        if(list.size()>0){
            for(int i=0;i<list.size();i++){
                //7#温湿度通讯状态
                if("ATXW07".equals(list.get(i).get("varid"))){
                    resMap.put("wsdzt",list.get(i).get("hvalue"));
                }
                //7#温度
                if("AWSD071".equals(list.get(i).get("varid"))){
                    resMap.put("wd",list.get(i).get("hvalue"));
                }
                //7#温度
                if("AWSD072".equals(list.get(i).get("varid"))){
                    resMap.put("sd",list.get(i).get("hvalue"));
                }

            }
        }else{
            resMap.put("wsdzt","");
            resMap.put("wd","");
            resMap.put("sd","");

        }
        return resMap;
    }

    //selectDhInfoList
    /**
     * 动环数据
     * pageNum  第几页
     * @return
     */
    @RequestMapping("/selectDhInfoList")
    public List<Map<String,Object>> selectDhInfoList(String devid,String insid,String varid){
//        List<Map<String,Object>> result = new ArrayList<>();
//        if(pageSize!=0 && pageSize>0){
//            PageHelper.startPage(pageNum,pageSize);
//        }else{
//            PageHelper.startPage(pageNum,10);
//        }
        Map<String,Object> param = new HashMap<>();
        if(!"".equals(devid)){
            param.put("devid",devid);
        }
        if(!"".equals(insid)){
            param.put("insid",insid);
        }
        if(!"".equals(varid)){
            param.put("varid",varid);
        }
        //List<Map<String,Object>> list = upsService.selectDhInfoList();
        List<Map<String,Object>> list = upsService.selectDhInfoListByParam(param);

        return list;
    }

    @RequestMapping("/selectDhInfoList415")
    public List<Map<String,Object>> selectDhInfoList415(){
        return upsService.selectDhInfoListtwo();
    }

    /**
     * 动环警告
     * pageNum  第几页
     * @return
     */
    @RequestMapping("/DhJgInfoList")
    public List<Map<String,Object>> DhJgInfoList(String devid,String insid,String varid){
        Map<String,Object> param = new HashMap<>();
        if(!"".equals(devid)){
            param.put("devid",devid);
        }
        if(!"".equals(insid)){
            param.put("insid",insid);
        }
        if(!"".equals(varid)){
            param.put("varid",varid);
        }
        List<Map<String,Object>> list = upsService.DhJgInfoList(param);
        return list;
    }


}
