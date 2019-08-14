package com.example.utils;

import org.apache.commons.codec.binary.Hex;
import org.apache.commons.lang.StringUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.math.BigInteger;
import java.security.*;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

public final class CryptUtils {

    private static final Logger log = LoggerFactory.getLogger(CryptUtils.class);

    /** 算法名称 */
    private static final String ALGORITHOM_RSA = "RSA";

    private static final String ALGORITHOM_MD5 = "MD5";



    private static final String ALGORITHOM_SHA5 = "SHA5";

    /** 密钥大小 */
    private static final int KEY_SIZE = 1024;

    private static final int DEFAULT_STR_RADIX = 16;

    /**
     * 获取MD5 hash的byte数组
     *
     * @param src
     * @return
     */
    public static byte[] md5(final String src) {
        return hash(src, ALGORITHOM_MD5);
    }

    /**
     * 获取MD5的hash字符串
     *
     * @param src
     * @return
     */
    public static String md5HexStr(final String src) {
        return hashHexStr(src, ALGORITHOM_MD5);
    }

    /**
     * sha5加密
     *
     * @param src
     * @return
     */
    public static byte[] sha5(final String src) {
        return hash(src, ALGORITHOM_SHA5);
    }

    /**
     * 生成sha5加密的字符串
     *
     * @param src
     * @return
     */
    public static String sha5HexStr(final String src) {
        return hashHexStr(src, ALGORITHOM_SHA5);
    }

    private static String hashHexStr(final String src, final String algorithm) {

        byte[] result = hash(src, algorithm);

        String digestHexStr = new String(Hex.encodeHex(result, false));

        return digestHexStr;
    }

    /**
     * 执行指定的hash方法
     *
     * @param src
     * @param algorithm hash算法名
     * @return 返回执行结果的 byte[],当algorithm指定的hash算法不存在时返回null
     */
    private static byte[] hash(final String src, final String algorithm) {

        byte[] result = null;
        try {
            MessageDigest messageDigest = MessageDigest.getInstance(algorithm);

            result = messageDigest.digest(src.getBytes());

        } catch (NoSuchAlgorithmException e) {
            log.debug(e.getMessage(), e);
        }
        return result;
    }

    /**
     * 生成并返回RSA密钥对。
     *
     * @return 返回rsa密钥对，当产生失败时返回null
     */
    public static synchronized KeyPair generateKeyPair() {
        try {
            KeyPairGenerator keyPairGen = KeyPairGenerator.getInstance(ALGORITHOM_RSA);
            keyPairGen.initialize(KEY_SIZE, new SecureRandom());
            KeyPair keyPair = keyPairGen.genKeyPair();

            return keyPair;
        } catch (InvalidParameterException ex) {
            log.error("KeyPairGenerator does not support a key length of " + KEY_SIZE + ".", ex);
        } catch (NoSuchAlgorithmException e) {
            log.debug(e.getMessage(), e);
        }
        return null;
    }

    /**
     * 使用指定的私钥解密数据。
     *
     * @param privateKey 给定的私钥。
     * @param data 要解密的数据。
     * @return 原数据。
     */
    public static byte[] rsaDecrypt(final RSAPrivateKey privateKey, final byte[] data) {

        BigInteger dExponent = privateKey.getPrivateExponent();
        BigInteger modulus = privateKey.getModulus();

        BigInteger c = new BigInteger(data);

        return c.modPow(dExponent, modulus).toByteArray();

    }

    /**
     * 使用给定的私钥解密给定的字符串。
     * <p>
     * 若私钥为 {@code null}，或者 {@code encrypttext} 为 {@code null}或空字符串则返回 {@code null}。 私钥不匹配时，返回 {@code null}。
     *
     * @param privateKey 给定的私钥。
     * @param encrypttext 密文。
     * @return 原文字符串。
     */
    public static String rsaDecrypt(final RSAPrivateKey privateKey, final String encrypttext) {
        if (privateKey == null || StringUtils.isBlank(encrypttext)) {
            return null;
        }
        BigInteger c = new BigInteger(encrypttext, DEFAULT_STR_RADIX);

        byte[] data = c.modPow(privateKey.getPrivateExponent(), privateKey.getModulus()).toByteArray();

        return new String(data);
    }

    /**
     * 使用指定的公钥加密数据。
     *
     * @param publicKey 给定的公钥。
     * @param data 要加密的数据。
     * @return 加密后的数据。
     */
    public static byte[] rsaEncrypt(final RSAPublicKey publicKey, final byte[] data) {

        BigInteger m = new BigInteger(data);

        BigInteger c = m.modPow(publicKey.getPublicExponent(), publicKey.getModulus());

        return c.toByteArray();
    }

    /**
     * 使用给定的公钥加密给定的字符串。
     * <p>
     * 若 {@code publicKey} 为 {@code null}，或者 {@code plaintext} 为 {@code null} 则返回 {@code null}。
     *
     * @param publicKey 给定的公钥。
     * @param plaintext 字符串。
     * @return 给定字符串的密文。
     */
    public static String rsaEncrypt(final RSAPublicKey publicKey, final String plaintext) {
        if (publicKey == null || plaintext == null) {
            return null;
        }
        byte[] data = plaintext.getBytes();
        byte[] enData = rsaEncrypt(publicKey, data);

        return new String(Hex.encodeHex(enData, false));

    }

    /**
     * 使用默认的私钥解密由JS加密（使用此类提供的公钥加密）的字符串。
     *
     * @param encrypttext 密文。
     * @return {@code encrypttext} 的原文字符串。
     */
    public static String decryptStringByJs(final RSAPrivateKey privateKey, final String encrypttext) {

        String text = rsaDecrypt(privateKey, encrypttext);

        if (text == null) {
            return null;
        }

        return StringUtils.reverse(text);
    }

    /**
     * 返回已初始化的默认的公钥
     *
     * @param keyPair
     * @return
     */
    public static RSAPublicKey getPublicKey(final KeyPair keyPair) {
        if (keyPair != null) {
            return (RSAPublicKey) keyPair.getPublic();
        }
        return null;
    }

    /**
     * 返回已初始化的默认的私钥。
     *
     * @param keyPair
     * @return
     */
    public static RSAPrivateKey getPrivateKey(final KeyPair keyPair) {
        if (null != keyPair) {
            return (RSAPrivateKey) keyPair.getPrivate();
        }
        return null;
    }
}