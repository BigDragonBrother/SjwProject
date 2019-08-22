/*
package com.example.utils;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.io.UnsupportedEncodingException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.security.KeyManagementException;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.cert.CertificateException;
import java.security.cert.X509Certificate;
import java.util.HashMap;
import java.util.Map;

import javax.net.ssl.HostnameVerifier;
import javax.net.ssl.HttpsURLConnection;
import javax.net.ssl.KeyManager;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSession;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.X509TrustManager;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang3.StringUtils;



*/
/**
 * 
 * @author <a href="mailto:chengqingwg@dhcc.com.cn">Qchen</a>
 * @date 2018年3月15日
 *//*

public class JavaHttpUtil {
	
	public static final String DEFAULT_PRE_URL = "http://localhost:8080/cayenne_security"; //此处替换成平台SDK所在服务器IP与端口
	public static final String DEFAULT_APPKEY = "itsm";//此处替换成申请的appkey
	public static final String DEFAULT_SECRET = CryptUtils.md5HexStr("dhccitsm");//此处替换成申请的secret
	
	private static class DefaultTrustManager implements X509TrustManager {
        @Override
        public void checkClientTrusted(X509Certificate[] chain, String authType) throws CertificateException {
        }

        @Override
        public void checkServerTrusted(X509Certificate[] chain, String authType) throws CertificateException {
        }

        @Override
        public X509Certificate[] getAcceptedIssuers() {
            return null;
        }
    }
	
	*/
/**
	 * 创建https 连接
	 * 
	 * @param uri
	 * @return
	 * @throws IOException
	 *//*

	private static HttpsURLConnection getHttpsURLConnection(String uri) throws IOException {
        SSLContext ctx = null;
        try {
            ctx = SSLContext.getInstance("TLS");
            ctx.init(new KeyManager[0], new TrustManager[] { new DefaultTrustManager() }, new SecureRandom());
        } catch (KeyManagementException e) {
            e.printStackTrace();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        SSLSocketFactory ssf = ctx.getSocketFactory();
        
        URL url = new URL(uri);
        HttpsURLConnection httpsConn = (HttpsURLConnection) url.openConnection();
        httpsConn.setSSLSocketFactory(ssf);
        httpsConn.setHostnameVerifier(new HostnameVerifier() {
            @Override
            public boolean verify(String arg0, SSLSession arg1) {
                return true;
            }
        });
        httpsConn.setDoInput(true);
        httpsConn.setDoOutput(true);
        return httpsConn;
    }
	
	*/
/**
	 * 根据url地址创建到连接，兼容HTTP和HTTPS
	 * @param url
	 * @return
	 * @throws IOException
	 *//*

	private static HttpURLConnection connect(String url) throws IOException {
	    HttpURLConnection conn = null;
        // 打开和URL之间的连接
        if(StringUtils.startsWith(url, "https://")) {
            conn = getHttpsURLConnection(url);
        } else {
            URL url_  = new URL(url);
            conn = (HttpURLConnection)url_.openConnection();
        }
        
        return conn;
	}
	
	private static Map<String, Object> prepareParamMap(Map<String, Object> paramMap, String appkey) {
	    Map<String, Object> paramMap_ = paramMap;
	    if (paramMap_ != null) {
            if (paramMap_.get("appkey_") == null) {
                paramMap_.put("appkey_", appkey);
            }
            if (paramMap_.get("time_") == null) {
                paramMap_.put("time_", System.currentTimeMillis() + "");
            }
        } else {
            paramMap_ = new HashMap<String, Object>();
            paramMap_.put("appkey_", appkey);
            paramMap_.put("time_", System.currentTimeMillis() + "");
        }
	    
	    return paramMap_;
	}
	
	private static String mapToQueryStr(Map<String, Object> params) throws UnsupportedEncodingException {
	    StringBuilder sb = new StringBuilder();
	    for(Map.Entry<String, Object> entry : params.entrySet()) {
	        if(entry.getValue() instanceof String[]){
	            String[] values = (String[])entry.getValue();
	            for(String item : values) {
	                sb.append(entry.getKey()).append("=").append(URLEncoder.encode(item, "UTF-8")).append('&');
	            }
	        } else {
	            sb.append(entry.getKey()).append("=").append(URLEncoder.encode((String)entry.getValue(), "UTF-8")).append('&');
	        }
	    }
	    
	    String paramStr = sb.substring(0, sb.length() - 1);
	    
	    return paramStr;
	}
	
	*/
/**
	 * 
	 * @param interfaceName
	 * @param paramMap
	 * @return
	 *//*

	public static String doGet(String interfaceName, Map<String, Object> paramMap) {
		return doGet(DEFAULT_PRE_URL, interfaceName, paramMap, DEFAULT_APPKEY, DEFAULT_SECRET);
	}
	
	*/
/**
	 * 
	 * @param preUrl
	 * @param interfaceName
	 * @param paramMap
	 * @param appkey
	 * @param secret
	 * @return
	 *//*

	public static String doGet(String serviceAddr, String interfaceName, Map<String, Object> paramMap, String appkey, String secret) {
	    Map<String, Object> paramMap_ = prepareParamMap(paramMap, appkey);
	    
		String token = HMACTokenUtils.buildToken(interfaceName, paramMap_, secret);
		
		String result = null;
		InputStream is = null;
		try {
		    String param = mapToQueryStr(paramMap_);
		    String urlStr = serviceAddr + interfaceName + "?" + param + "&token_=" + token;
		    
		    HttpURLConnection conn = connect(urlStr);
			
			// 读取URL的响应
			is = conn.getInputStream();
			result = IOUtils.toString(is, "UTF-8");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
		    IOUtils.closeQuietly(is);
		}
		return result;
	}
	
	*/
/**
	 * <p>
	 * </p>
	 * @author caoshiyan
	 * @version V1.0
	 * @date 2015年12月29日 上午11:35:49
	 * @param interfaceName
	 * @param paramMap
	 * @return
	 *
	 * @modificationHistory=========================逻辑或功能性重大变更记录
	 * @modify by user: {修改人} 2015年12月29日
	 * @modify by reason:{方法名}:{原因}
	 * @since
	 *//*

	public static String doPost(String interfaceName, Map<String, Object> paramMap) {
		return doPost(DEFAULT_PRE_URL, interfaceName, paramMap, DEFAULT_APPKEY, DEFAULT_SECRET);
	}
	
	*/
/**
	 * 
	 * @param preUrl
	 * @param interfaceName
	 * @param paramMap
	 * @param appkey
	 * @param secret
	 * @return
	 *//*

	public static String doPost(String serviceAddr, String interfaceName, Map<String, Object> paramMap, String appkey, String secret) {
	    Map<String, Object> paramMap_ = prepareParamMap(paramMap, appkey);
	    
		String token = HMACTokenUtils.buildToken(interfaceName, paramMap_, secret);
		String urlStr = serviceAddr + interfaceName + "?token_=" + token;
		
		String result = null;
		InputStream is = null;
		OutputStream os = null;
		try {
		    HttpURLConnection conn = connect(urlStr);
			
		    conn.setRequestProperty("Content-Type","application/x-www-form-urlencoded"); 
			conn.setRequestProperty("Accept-Charset", "UTF-8");
			conn.setRequestMethod("POST");
			conn.setDoOutput(true);
			conn.setDoInput(true);
			conn.setUseCaches(false);
			
			// 写入url操作
			os = conn.getOutputStream();
			String paramStr = mapToQueryStr(paramMap_) + "&token_=" + token;
			
			IOUtils.write(paramStr, os, "UTF-8");
			os.flush();
			
			// 读取URL的响应
			is = conn.getInputStream();
			result = IOUtils.toString(is, "UTF-8");
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
		    IOUtils.closeQuietly(is);
		    IOUtils.closeQuietly(os);
		}
		
		return result;
	}
}
*/
