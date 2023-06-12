const Step = {
    GO_URL: "https://ads.google.com/aw/overview",
    FIRST_WAIT_TIME: 1000 * 15,
    SECOND_WAIT_TIME: 1000 * 15,
    DATA: "Hesabınız askıya alındı",
    LOGIN_SELECTORS: {
      LOGIN: "Oturum aç",
      FORM_ERRORS: [
        'Bir e-posta adresi veya telefon numarası girin',
        'Şifre girin',
        'Şifre yanlış. Tekrar deneyin veya "Şifrenizi mi unuttunuz?"u tıklayarak şifreyi sıfırlayın.',
        'Google Hesabınız bulunamadı',
      ]
    },
    COOKIE: [
      [{"name":"__Secure-1PSIDCC","value":"AP8dLtxNl45ZG0tvamf4oC5GRZhjvhXNeLth0BecLnLvDL4t7UJeUXE_grge0X_E6kq3qW90eA","domain":".google.com","path":"/","expires":1717943401.867821,"size":90,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SIDCC","value":"AP8dLtxXIT8PV4oNJVpRFvE-RPEtOUz71Az3UlDdhJ_GEnQbbSxfws0VlG5zxznTKXOKn4vbBK0","domain":".google.com","path":"/","expires":1717943401.867821,"size":80,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_ga","value":"GA1.1.218166898.1686407025","domain":".ads.google.com","path":"/","expires":1720967394.516821,"size":29,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_ga_6WWNF0Z6T6","value":"GS1.1.1686407353.1.1.1686407394.0.0.0","domain":".ads.google.com","path":"/","expires":1720967394.514821,"size":51,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_ga_J51Y85KVRZ","value":"GS1.1.1686407028.1.1.1686407341.16.0.0","domain":".ads.google.com","path":"/","expires":1720967341.567947,"size":52,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PSIDCC","value":"AP8dLtwitMdzlVBs1H0HX3vrVrGj-6rtj8eHPQiYM-ZA71BGH8DRlfmVH1CTDorVUPb_E_bEsUY","domain":".google.com","path":"/","expires":1717943401.867821,"size":91,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"S","value":"billing-ui-v3=srss_yRonPM8CvmbduXOzLSn-OUmEEyn:billing-ui-v3-efe=srss_yRonPM8CvmbduXOzLSn-OUmEEyn","domain":".google.com","path":"/","expires":-1,"size":98,"httpOnly":true,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"APISID","value":"tM9vMWmmHhH4kUsl/AuHhDcZJWZggO8uJD","domain":".google.com","path":"/","expires":1720966968.326954,"size":40,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SEARCH_SAMESITE","value":"CgQIvpgB","domain":".google.com","path":"/","expires":1701959014.77058,"size":23,"httpOnly":false,"secure":false,"session":false,"sameSite":"Strict","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"ADS_VISITOR_ID","value":"00000000-0000-0000-0000-000000000000/112074491132129705178","domain":".google.com","path":"/","expires":1694183027.98658,"size":72,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"1P_JAR","value":"2023-06-10-14","domain":".google.com","path":"/","expires":1688999020.61958,"size":19,"httpOnly":false,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"NID","value":"511=jXTDKyvDYuTtMQXZiLTT40lsZiqGIrueDx3_lVuwollokuX3hMliI7hBs8JSh-TSrs0NfkeXIcLm4t8dIZOF2Knm5qB5DIJKuxOmuDKMh6KF5RoUILR04T1U2O5FuMmkaCWBGoBoPve00vwPRuEs4K-_qHxEfX44cvxGXvi-0tum8lFKt7FfMAaN4ImRLpwa7u_JrLCx-CvTPegtnthZLkW6cFnU8SbfxEdenqOSbdxYXC6Aw4OMwJ0JDtrx5CPZ9igiVw","domain":".google.com","path":"/","expires":1702218217.75658,"size":269,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-1PAPISID","value":"_EFSDTO7CRyiSJu_/AJvHXS_MomzemmpNm","domain":".google.com","path":"/","expires":1720966968.326954,"size":51,"httpOnly":false,"secure":true,"session":false,"sameParty":true,"sourceScheme":"Secure","sourcePort":443},{"name":"AdsUserLocale","value":"tr","domain":".ads.google.com","path":"/","expires":1688999351.698947,"size":15,"httpOnly":true,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-OSID","value":"XQj9eJpblyUSQ1OZHEGSN8WszCjntjrvVJYL_4lAMiWqDmttVPgiFir1UzZiH4_0D66rvw.","domain":"ads.google.com","path":"/","expires":1720967017.43758,"size":84,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"ADS_CUSTOMER_ACCOUNT_SESSION_INFO","value":"ScCigAoksJDxsxFQz4ZP-GxBm5_virC_X-dyl1lI4m0=authuser-0","domain":".ads.google.com","path":"/","expires":-1,"size":87,"httpOnly":false,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"AEC","value":"AUEFqZdqecsQtmzdjohE_ebsC5ZzQnX4YBjd3-E7kVDn9UMPm0wiB0SUoQ","domain":".google.com","path":"/","expires":1701959014.77158,"size":61,"httpOnly":true,"secure":true,"session":false,"sameSite":"Lax","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PSIDTS","value":"sidts-CjIBLFra0kYpCDtqDW-ZGELNHoqsyNUbJNm16QToG_Od8XKCEPSinfUNDaOtCmHPz-XenRAA","domain":".google.com","path":"/","expires":1717942972.312954,"size":94,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PAPISID","value":"_EFSDTO7CRyiSJu_/AJvHXS_MomzemmpNm","domain":".google.com","path":"/","expires":1720966968.326954,"size":51,"httpOnly":false,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-1PSIDTS","value":"sidts-CjIBLFra0kYpCDtqDW-ZGELNHoqsyNUbJNm16QToG_Od8XKCEPSinfUNDaOtCmHPz-XenRAA","domain":".google.com","path":"/","expires":1717942972.312954,"size":94,"httpOnly":true,"secure":true,"session":false,"sameParty":true,"sourceScheme":"Secure","sourcePort":443},{"name":"S","value":"adwords-frontend-shard-manager=Ybk_9SB6h8GMqQPhxdldHxTxA_ezxorlDxj9Oj_Wvz0","domain":".ads.google.com","path":"/aw","expires":-1,"size":75,"httpOnly":true,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SSID","value":"AuJGXAMmHKPnFn7n_","domain":".google.com","path":"/","expires":1720966968.326954,"size":21,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"S","value":"acx-adwords-navigation-frontend=dVe_OMrVCuiu1jm6CFnkuO9tJwYKp5fhg5BvAR1IMI4","domain":".ads.google.com","path":"/","expires":-1,"size":76,"httpOnly":true,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"HSID","value":"Ak4oPyPZ-YcSZ9kkD","domain":".google.com","path":"/","expires":1720966968.326954,"size":21,"httpOnly":true,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_gid","value":"GA1.3.562152748.1686407025","domain":".ads.google.com","path":"/","expires":1686493794,"size":30,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"OSID","value":"XQj9eJpblyUSQ1OZHEGSN8WszCjntjrvVJYL_4lAMiWqDmtt6xhQl5FhPKSP0YEbo-gfjQ.","domain":"ads.google.com","path":"/","expires":1720967017.43758,"size":75,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PSID","value":"XQj9eNsFKYrecH4WvF-nuU7f78NP7lktk7Zoz353e6EJ5x0MiSQvG11SpID4xi8AnzxVKQ.","domain":".google.com","path":"/","expires":1720966968.326954,"size":85,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SID","value":"XQj9eNsFKYrecH4WvF-nuU7f78NP7lktk7Zoz353e6EJ5x0MRtb3cAwjOWmBTYNuXlIHxQ.","domain":".google.com","path":"/","expires":1720966968.326954,"size":74,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"adwordsReferralSource","value":"sourceid=emp&subid=ALL-tr-et-g-aw-c-home-awhp_xin1_signin!o2-awhp-hv-01-22&clickid=","domain":".ads.google.com","path":"/","expires":1694183351.698947,"size":104,"httpOnly":true,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-1PSID","value":"XQj9eNsFKYrecH4WvF-nuU7f78NP7lktk7Zoz353e6EJ5x0MaKgiKTA3zsz1hDbuGkRU-Q.","domain":".google.com","path":"/","expires":1720966968.326954,"size":85,"httpOnly":true,"secure":true,"session":false,"sameParty":true,"sourceScheme":"Secure","sourcePort":443},{"name":"SAPISID","value":"_EFSDTO7CRyiSJu_/AJvHXS_MomzemmpNm","domain":".google.com","path":"/","expires":1720966968.326954,"size":41,"httpOnly":false,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_gcl_au","value":"1.1.835233467.1686407043","domain":".ads.google.com","path":"/","expires":1694183043,"size":31,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443}],
      [{"name":"__Secure-1PSIDCC","value":"AP8dLtw0WLg-ezA_pobFfF8NJ7KEqbeNtKPeO2skCnz3-nsW6gZl3iHwxNb1YNynBTsqKOb3BQ","domain":".google.com","path":"/","expires":1717943255.656061,"size":90,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SIDCC","value":"AP8dLtzrNnDrWGaVe1yyuMcoNhu-hyofkM-ZhisGLj9UlcjNf5XMSgZvWipOvCcUlad79EKsrAY","domain":".google.com","path":"/","expires":1717943255.656061,"size":80,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_ga","value":"GA1.1.1529662648.1686406893","domain":".ads.google.com","path":"/","expires":1720967248.438432,"size":30,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_ga_J51Y85KVRZ","value":"GS1.1.1686406898.1.1.1686407248.60.0.0","domain":".ads.google.com","path":"/","expires":1720967248.080432,"size":52,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"APISID","value":"Lxb-0abmAiJSxHVt/A0zzJPbrmpyrB3Hu2","domain":".google.com","path":"/","expires":1720966668.448891,"size":40,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"ADS_VISITOR_ID","value":"00000000-0000-0000-0000-000000000000/102596778111885565371","domain":".google.com","path":"/","expires":1694182895.747592,"size":72,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-1PAPISID","value":"XEuu8wBe-vgIg3K1/Am1jZizSHYtiW_jXM","domain":".google.com","path":"/","expires":1720966668.448891,"size":51,"httpOnly":false,"secure":true,"session":false,"sameParty":true,"sourceScheme":"Secure","sourcePort":443},{"name":"AdsUserLocale","value":"tr","domain":".ads.google.com","path":"/","expires":1688999208.609432,"size":15,"httpOnly":true,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-OSID","value":"XQjnatdvIBbgMrqbKKqqnzC5HQMGeNjK2uaRWd5dLXX-kALMRoLtVKw3Cf6_va-chYwIGQ.","domain":"ads.google.com","path":"/","expires":1720966894.427592,"size":84,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"ADS_CUSTOMER_ACCOUNT_SESSION_INFO","value":"ScCigAoksJDxsxFQz4ZP-GxBm5_virC_X-dyl1lI4m0=authuser-0","domain":".ads.google.com","path":"/","expires":-1,"size":87,"httpOnly":false,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_ga_6WWNF0Z6T6","value":"GS1.1.1686407209.1.1.1686407248.0.0.0","domain":".ads.google.com","path":"/","expires":1720967248.437432,"size":51,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"CONSISTENCY","value":"AKJVzcqjcne_-x7u3pwzz7MVEzmDD_6T2J1czDtNQrf0KmDkkkqlpbKhDNnwgIRBq444ia2zmqvwnKKBoS2aJK3APYn3WONhAlWhF2Np_QWRAKXWknjchG-eG3WRNJvmjbbQRjZ9-95vILQQljpnPADegkmtV1rI3ugc_ykAEli9XXt6hXKkq8x1ZQ_890mMZwGxHXDv0DOp","domain":".google.com","path":"/","expires":1686407399.03629,"size":215,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_gcl_au","value":"1.1.1822780319.1686406900","domain":".ads.google.com","path":"/","expires":1694182900,"size":32,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PAPISID","value":"XEuu8wBe-vgIg3K1/Am1jZizSHYtiW_jXM","domain":".google.com","path":"/","expires":1720966668.448891,"size":51,"httpOnly":false,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PSIDTS","value":"sidts-CjEBLFra0vysKNkomEwZKcF_vd2Dd9VS6zQaDjFOm7a_YTIGuF54yLzj0xfzAjorCaXSEAA","domain":".google.com","path":"/","expires":1717942698.530891,"size":93,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-1PSIDTS","value":"sidts-CjEBLFra0vysKNkomEwZKcF_vd2Dd9VS6zQaDjFOm7a_YTIGuF54yLzj0xfzAjorCaXSEAA","domain":".google.com","path":"/","expires":1717942698.530891,"size":93,"httpOnly":true,"secure":true,"session":false,"sameParty":true,"sourceScheme":"Secure","sourcePort":443},{"name":"SSID","value":"AKfCd6pWy9DlGi-eP","domain":".google.com","path":"/","expires":1720966668.448891,"size":21,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SAPISID","value":"XEuu8wBe-vgIg3K1/Am1jZizSHYtiW_jXM","domain":".google.com","path":"/","expires":1720966668.448891,"size":41,"httpOnly":false,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"HSID","value":"AiICPY_Zb6JzalEGE","domain":".google.com","path":"/","expires":1720966668.448891,"size":21,"httpOnly":true,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"S","value":"acx-adwords-navigation-frontend=JykHRBVYACJuID9HwaRjx0KgydMdHB2Pr1kqn6NDulI","domain":".ads.google.com","path":"/","expires":-1,"size":76,"httpOnly":true,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"NID","value":"511=EENo4crFns3NpWR217LdU7p-MiBc6narsI4PQ3uP-8AJEUfPViglTwct48h_P5mwq51NG9JTXRGb2vI8m39bfy3_VsCDPCdqD-UyyhSTyABaOOAikOlWGz8K1D82JZsdBq1cwAb-oQprguGSQaW_RJVtP1wsqBrli5fVqKKWXKhEH3T3o2UgDzat-xhlXGPiOH-rRJOVYvl7ldWC9xKti2FSX7SQxFbaJYywg3o","domain":".google.com","path":"/","expires":1702217868.448891,"size":238,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PSIDCC","value":"AP8dLtwWp4qBjvE6JaLvZRMt6GfJ_WmFy6I8Celm61R2MdjfuwQ18mqOYaRSTa0NXWJVxXCT7w","domain":".google.com","path":"/","expires":1717943255.656061,"size":90,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"S","value":"billing-ui-v3=_3bTbKwMDPNffuqyOjZ-AwzN8K3sDTvF:billing-ui-v3-efe=_3bTbKwMDPNffuqyOjZ-AwzN8K3sDTvF","domain":".google.com","path":"/","expires":-1,"size":98,"httpOnly":true,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"S","value":"adwords-frontend-shard-manager=Nz3yljKnJpUZwA3G958C_Y5A63g-wr0IrzoIHezdy0k","domain":".ads.google.com","path":"/aw","expires":-1,"size":75,"httpOnly":true,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"OSID","value":"XQjnatdvIBbgMrqbKKqqnzC5HQMGeNjK2uaRWd5dLXX-kALM13kQFa2w8Uy6VW2zVbJM4A.","domain":"ads.google.com","path":"/","expires":1720966894.427592,"size":75,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_gid","value":"GA1.3.857762506.1686406893","domain":".ads.google.com","path":"/","expires":1686493648,"size":30,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PSID","value":"XQjnaqyq9kaogAm4HHi5WFiPphZiM4-UeMDNAmqISE-ZuZ5lLp40W2duwXawIH4ZP5mSgA.","domain":".google.com","path":"/","expires":1720966668.448891,"size":85,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"adwordsReferralSource","value":"sourceid=emp&subid=ALL-tr-et-g-aw-c-home-awhp_xin1_signin!o2-awhp-hv-01-22&clickid=","domain":".ads.google.com","path":"/","expires":1694183208.609432,"size":104,"httpOnly":true,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-1PSID","value":"XQjnaqyq9kaogAm4HHi5WFiPphZiM4-UeMDNAmqISE-ZuZ5lJwpb2c7jwTxdF2ry8ToPmw.","domain":".google.com","path":"/","expires":1720966668.448891,"size":85,"httpOnly":true,"secure":true,"session":false,"sameParty":true,"sourceScheme":"Secure","sourcePort":443},{"name":"SID","value":"XQjnaqyq9kaogAm4HHi5WFiPphZiM4-UeMDNAmqISE-ZuZ5l0G7one7QC831NghD6Sk5Og.","domain":".google.com","path":"/","expires":1720966668.448891,"size":74,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443}],
      [{"name":"__Secure-1PSIDCC","value":"AP8dLtyxDS8mHv9rIm1xatc1pfEsPykXvjb-RFnNKt--JUoyea4XfcG3ZynZNLDdtJHsw9JY9w","domain":".google.com","path":"/","expires":1717943223.96933,"size":90,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SIDCC","value":"AP8dLtyPgHc1c5aqcOkWTVrHCnkHF6gbwiF2ikdlnjfUEaP60uRicH1b2dVK0jyyLpAkOG-I3jw","domain":".google.com","path":"/","expires":1717943223.96933,"size":80,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_ga","value":"GA1.1.2026427102.1686406883","domain":".ads.google.com","path":"/","expires":1720967217.26133,"size":30,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_ga_J51Y85KVRZ","value":"GS1.1.1686406888.1.1.1686407216.1.0.0","domain":".ads.google.com","path":"/","expires":1720967216.97233,"size":51,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"APISID","value":"aq1v_t0cnDFI7Se2/Ab6s7HVCxg7V849ui","domain":".google.com","path":"/","expires":1720966679.530892,"size":40,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"ADS_VISITOR_ID","value":"00000000-0000-0000-0000-000000000000/113561827135084449279","domain":".google.com","path":"/","expires":1694182885.622832,"size":72,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-1PAPISID","value":"lIzFAMmBC8S9tvwd/AJpkBoxOneQd-WYog","domain":".google.com","path":"/","expires":1720966679.530892,"size":51,"httpOnly":false,"secure":true,"session":false,"sameParty":true,"sourceScheme":"Secure","sourcePort":443},{"name":"AdsUserLocale","value":"tr","domain":".ads.google.com","path":"/","expires":1688999175.569119,"size":15,"httpOnly":true,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-OSID","value":"XQjtDbb_HKfI0zyk3czouah9kH31fKDmVVb3A8k9Sg4Z8F_wTagW24vc1U-fmzu-zeXvTg.","domain":"ads.google.com","path":"/","expires":1720966884.429832,"size":84,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"ADS_CUSTOMER_ACCOUNT_SESSION_INFO","value":"ScCigAoksJDxsxFQz4ZP-GxBm5_virC_X-dyl1lI4m0=authuser-0","domain":".ads.google.com","path":"/","expires":-1,"size":87,"httpOnly":false,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_ga_6WWNF0Z6T6","value":"GS1.1.1686407176.1.1.1686407217.0.0.0","domain":".ads.google.com","path":"/","expires":1720967217.25933,"size":51,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"CONSISTENCY","value":"AKJVzcpAqpfjvYWxSmrcIQq-cb-YOGa-uCwt343Ike3E6jgoqb1uUulcX1jtyQCdwIefIQAqwJ6uY7DTECRJ9DCiKsr-VjnZ5oTVXGyIwa-rMCCZDBzK3DNA60z3-9zkOBWx1KOPO_bWiE0PGWzTyKbwV60exQVc4GjXNI0PbszOc4Co2lMyzt2oe7Sf-T0NX88lVYUve0xo","domain":".google.com","path":"/","expires":1686407391.647163,"size":215,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_gcl_au","value":"1.1.860265667.1686406890","domain":".ads.google.com","path":"/","expires":1694182890,"size":31,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PAPISID","value":"lIzFAMmBC8S9tvwd/AJpkBoxOneQd-WYog","domain":".google.com","path":"/","expires":1720966679.530892,"size":51,"httpOnly":false,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PSIDTS","value":"sidts-CjIBLFra0o7rpB2Ds3XuCIh08EsQUicOdFZjs4etxlCL0pbytv1CNZeX2jyEkgsRx42e-xAA","domain":".google.com","path":"/","expires":1717942707.880892,"size":94,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-1PSIDTS","value":"sidts-CjIBLFra0o7rpB2Ds3XuCIh08EsQUicOdFZjs4etxlCL0pbytv1CNZeX2jyEkgsRx42e-xAA","domain":".google.com","path":"/","expires":1717942707.880892,"size":94,"httpOnly":true,"secure":true,"session":false,"sameParty":true,"sourceScheme":"Secure","sourcePort":443},{"name":"SSID","value":"AdRjFa70mYjIdmJiI","domain":".google.com","path":"/","expires":1720966679.530892,"size":21,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"SAPISID","value":"lIzFAMmBC8S9tvwd/AJpkBoxOneQd-WYog","domain":".google.com","path":"/","expires":1720966679.530892,"size":41,"httpOnly":false,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"HSID","value":"AN5epoWjKzT-BPSGK","domain":".google.com","path":"/","expires":1720966679.530892,"size":21,"httpOnly":true,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"S","value":"acx-adwords-navigation-frontend=Qa52LwaMzKODgNDT2y61o8OIHnR3vV6aM7DSqrBjOD8","domain":".ads.google.com","path":"/","expires":-1,"size":76,"httpOnly":true,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"NID","value":"511=c_q-p7_BXErieikdfRV1XBPsquPCF94EXmkIH2EyDFJh_va9QtdJzIMDgLnzh_Z2Q5jnweGmmZgY1IwzFwNZMvsxH84xV0WYpo705GEzG_wgVdvW7otBi01Lw-XmRDJPbez9rnwRb22m0qVxdvqk9ZzOXUOpNTwVlrRSBITuiSWRgQxFYCcJk2dmxxFKI_rDwMAhMgC0EFVjIaWFznTVj57sTEKUUWxx4e7KBw","domain":".google.com","path":"/","expires":1702217879.530892,"size":237,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PSIDCC","value":"AP8dLtytBSs4EaiivdVBFi2sfCZldDyX49P-_IoCItFkGC7-JEIOujwy1L9r2I8NmCDoGpphVpU","domain":".google.com","path":"/","expires":1717943223.96933,"size":91,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"S","value":"billing-ui-v3=QygNr6gUrcvGp_cEPxnk0azWW4YCjBNy:billing-ui-v3-efe=QygNr6gUrcvGp_cEPxnk0azWW4YCjBNy","domain":".google.com","path":"/","expires":-1,"size":98,"httpOnly":true,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"S","value":"adwords-frontend-shard-manager=4rhzFNfCkB-40aHlWykdhedHbxg74-vgOR6W3rK5soY","domain":".ads.google.com","path":"/aw","expires":-1,"size":75,"httpOnly":true,"secure":true,"session":true,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"OSID","value":"XQjtDbb_HKfI0zyk3czouah9kH31fKDmVVb3A8k9Sg4Z8F_wfs8TkVtDTVu3VNDQ2HTCjg.","domain":"ads.google.com","path":"/","expires":1720966884.429832,"size":75,"httpOnly":true,"secure":true,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"_gid","value":"GA1.3.1292774318.1686406883","domain":".ads.google.com","path":"/","expires":1686493617,"size":31,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-3PSID","value":"XQjtDcCBMh5ayy2gS8DSEaiuhNNRujIr8aS4r9Zz34V7JTpXwGIeCae3kuLjp5JjNEfUKA.","domain":".google.com","path":"/","expires":1720966679.530892,"size":85,"httpOnly":true,"secure":true,"session":false,"sameSite":"None","sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"adwordsReferralSource","value":"sourceid=emp&subid=ALL-tr-et-g-aw-c-home-awhp_xin1_signin!o2-awhp-hv-01-22&clickid=","domain":".ads.google.com","path":"/","expires":1694183175.569119,"size":104,"httpOnly":true,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443},{"name":"__Secure-1PSID","value":"XQjtDcCBMh5ayy2gS8DSEaiuhNNRujIr8aS4r9Zz34V7JTpXcT2-1oF453DXu4REJAUanw.","domain":".google.com","path":"/","expires":1720966679.530892,"size":85,"httpOnly":true,"secure":true,"session":false,"sameParty":true,"sourceScheme":"Secure","sourcePort":443},{"name":"SID","value":"XQjtDcCBMh5ayy2gS8DSEaiuhNNRujIr8aS4r9Zz34V7JTpXdb9pxO8Ifzi1PCcgAFbdUA.","domain":".google.com","path":"/","expires":1720966679.530892,"size":74,"httpOnly":false,"secure":false,"session":false,"sameParty":false,"sourceScheme":"Secure","sourcePort":443}]
    ],
    PROXY: [
      "91.241.49.33:17291:waewyeni:waewyeni",
      "91.241.49.33:17397:waewyeni:waewyeni",
      "91.241.49.33:17394:waewyeni:waewyeni"
    ]
}

export default Step;