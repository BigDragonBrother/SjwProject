/**
 * Copyright (c) 2012-2018 by DHCC All rights reserved.
 */
package com.example.utils;

import java.util.Map;
import java.util.TreeMap;

import javax.crypto.Mac;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Hex;

import net.sf.json.JSONObject;

/**
 * HMAC 加密Token
 * @author <a href="mailto:chengqingwg@dhcc.com.cn">Qchen</a>
 * @date 2018年3月14日
 */
public class HMACTokenUtils {
    
    private static String hmacSHA256(String content , String pwd) {
        try {
            Mac mac = Mac.getInstance("HmacSHA256");

            byte[] secretByte = pwd.getBytes("utf-8");
            byte[] dataBytes = content.getBytes("utf-8");

            SecretKey secret = new SecretKeySpec(secretByte, "HMACSHA256");

            mac.init(secret);

            byte[] doFinal = mac.doFinal(dataBytes);

            return Hex.encodeHexString(doFinal);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    public final static String buildToken(String url, String paramJson, String secret) {
       return hmacSHA256(url + paramJson , secret);
    }
    
    public final static String buildToken(String url, Map<String, Object> paramMap, String secret) {
        String paramJson = JSONObject.fromObject(new TreeMap<String, Object>(paramMap)).toString();
        
        return hmacSHA256(url + paramJson , secret);
     }
    
}
