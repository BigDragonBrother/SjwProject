package com.example.dpinterface;

import com.example.service.JgsService;
import com.example.service.ZcyxztService;
import com.github.pagehelper.PageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@Controller
@RequestMapping("/zcyxzt")
public class Zcyxztinterface {

    @Resource
    private ZcyxztService zcyxztService;

    //带分页参数取消
    //@RequestParam(value = "pageNum",defaultValue="1") int pageNum,@RequestParam(value = "pageSize",defaultValue="10")int pageSize

    /**
     * 基础信息
     * pageNum  第几页
     * @return
     */
    @RequestMapping("/selectZcyxztBaseInfoList")
    public List<Map<String,Object>> selectZcyxztBaseInfoList(){
//        List<Map<String,Object>> result = new ArrayList<>();
//
//        if(pageSize!=0 && pageSize>0){
//            PageHelper.startPage(pageNum,pageSize);
//        }else{
//            PageHelper.startPage(pageNum,10);
//        }
        List<Map<String,Object>> list = zcyxztService.selectZcyxztBaseInfoList();
        return list;
    }

    /**
     * 接口配置信息
     * pageNum  第几页
     * @return
     */
    @RequestMapping("/selectJkpzxxInfoList")
    public List<Map<String,Object>> selectJkpzxxInfoList(){
//        List<Map<String,Object>> result = new ArrayList<>();
//        if(pageSize!=0 && pageSize>0){
//            PageHelper.startPage(pageNum,pageSize);
//        }else{
//            PageHelper.startPage(pageNum,10);
//        }
        List<Map<String,Object>> list = zcyxztService.selectJkpzxxInfoList();
        return list;
    }
    /**
     * 接口状态最新数据
     * pageNum  第几页
     * @return
     */
    @RequestMapping("/selectJkZtZxsjInfoList")
    public List<Map<String,Object>> selectJkZtZxsjInfoList(){
//        List<Map<String,Object>> result = new ArrayList<>();
//        if(pageSize!=0 && pageSize>0){
//            PageHelper.startPage(pageNum,pageSize);
//        }else{
//            PageHelper.startPage(pageNum,10);
//        }
        List<Map<String,Object>> list = zcyxztService.selectJkZtZxsjInfoList();
        return list;
    }

    /**
     * 接口最新流速
     * pageNum  第几页
     * @return
     */
    @RequestMapping("/selectJkzxlsInfoList")
    public List<Map<String,Object>> selectJkzxlsInfoList(){
//        List<Map<String,Object>> result = new ArrayList<>();
//        if(pageSize!=0 && pageSize>0){
//            PageHelper.startPage(pageNum,pageSize);
//        }else{
//            PageHelper.startPage(pageNum,10);
//        }
        List<Map<String,Object>> list = zcyxztService.selectJkzxlsInfoList();
        return list;
    }

    /**
     * 网络设备cpu利用率
     * pageNum  第几页
     * @return
     */
    @RequestMapping("/selectWlsbCPULylInfoList")
    public List<Map<String,Object>> selectWlsbCPULylInfoList(){
//        List<Map<String,Object>> result = new ArrayList<>();
//        if(pageSize!=0 && pageSize>0){
//            PageHelper.startPage(pageNum,pageSize);
//        }else{
//            PageHelper.startPage(pageNum,10);
//        }
        List<Map<String,Object>> list = zcyxztService.selectWlsbCPULylInfoList();
        return list;
    }

    /**
     * 网络设备内存利用率
     * pageNum  第几页
     * @return
     */
    @RequestMapping("/selectWlsbNCLylInfoList")
    public List<Map<String,Object>> selectWlsbNCLylInfoList(){
//        List<Map<String,Object>> result = new ArrayList<>();
//        if(pageSize!=0 && pageSize>0){
//            PageHelper.startPage(pageNum,pageSize);
//        }else{
//            PageHelper.startPage(pageNum,10);
//        }
        List<Map<String,Object>> list = zcyxztService.selectWlsbNCLylInfoList();
        return list;
    }

    /**
     * 主机设备cpu利用率
     * pageNum  第几页
     * @return
     */
    @RequestMapping("/selectZjsbCPULylInfoList")
    public List<Map<String,Object>> selectZjsbCPULylInfoList(){
//        List<Map<String,Object>> result = new ArrayList<>();
//        if(pageSize!=0 && pageSize>0){
//            PageHelper.startPage(pageNum,pageSize);
//        }else{
//            PageHelper.startPage(pageNum,10);
//        }
        List<Map<String,Object>> list = zcyxztService.selectZjsbCPULylInfoList();
        return list;
    }

    /**
     * 主机设备内存利用率
     * pageNum  第几页
     * @return
     */
    @RequestMapping("/selectZjsbNCLylInfoList")
    public List<Map<String,Object>> selectZjsbNCLylInfoList(){
//        List<Map<String,Object>> result = new ArrayList<>();
//        if(pageSize!=0 && pageSize>0){
//            PageHelper.startPage(pageNum,pageSize);
//        }else{
//            PageHelper.startPage(pageNum,10);
//        }
        List<Map<String,Object>> list = zcyxztService.selectZjsbNCLylInfoList();
        return list;
    }





}
