import React from 'react'
import CountDown from './CountDown'

const Banner = () => {
    return (
        <div className="banner banner-image">
            <div className="banner-video-container">
                <video className="banner-video" autoPlay loop muted>
                    <source
                        src="https://rr2---sn-cvh76nl7.c.drive.google.com/videoplayback?expire=1632083351&ei=V2VHYazdH4bQ-LYPh4KmqAM&ip=103.157.112.192&cp=QVRIVEFfUlNTQlhPOnFIVUhTTjRxQ2RXTm1weDdvNGZtZENtRFVFMWo1YWNsT3hGbVh3SW1tYlU&id=ddbf298d096b7d4f&itag=18&source=webdrive&requiressl=yes&mh=r5&mm=32&mn=sn-cvh76nl7&ms=su&mv=u&mvi=2&pl=25&ttl=transient&susc=dr&driveid=1iQQR0dlrBVwGENRMX204M86cMTlgWXRg&app=explorer&mime=video/mp4&vprv=1&prv=1&dur=33.343&lmt=1631648220239843&mt=1632067904&sparams=expire,ei,ip,cp,id,itag,source,requiressl,ttl,susc,driveid,app,mime,vprv,prv,dur,lmt&sig=AOq0QJ8wRAIgDka3exhYbJAW_700WvxAbm5irz43PFQP6S0VWvkDWb0CIFiV9MiqAr7cBdd90hKpv_C1r-eTz4wHuAKwl4I2ztxz&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRQIgY9reCq7Gepe3TVnExY8Nd_Wq-GSfzZAWbY4cQGlnQM4CIQDtctdVUpP_dpv2G9Chrt8TGCxrHHTbAtW064Wzk9kAlw==&cpn=nJz9eMAlO5E_iQ4M&c=WEB_EMBEDDED_PLAYER&cver=1.20210915.1.2"
                        type="video/mp4"/>
                </video>
            </div>
            <div className="banner-tint flex-center">
                <div className="banner-text p-4">
                    <h1 className="f-700">Ultimate Photography &amp; Video Contest</h1>
                    <h4>FOCUSING TOURISM OF TAMIL NADU</h4>
                    <CountDown/>
                </div>
            </div>
        </div>
    )
}

export default Banner
