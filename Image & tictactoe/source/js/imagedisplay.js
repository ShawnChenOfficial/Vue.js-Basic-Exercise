
            var img=["./source/imgs/Advert.png","./source/imgs/FXVLogo.png","./source/imgs/GreenbackLogo_white.png","./source/imgs/SilverbackEventsLogo_white.png","./source/imgs/AperitivoLogo_white.png"];
            const VueObj = new Vue({
                            el: '#app',
                            data: {
                                iniImg: './source/imgs/Advert.png',
                                buttonName: "Click",
                                count:0,
                                height: 400,
                                width: 800
                            },
                            mounted() {
                                setInterval(()=>{
                                    VueObj.count++;
                                    if(VueObj.count < img.length){
                                        VueObj.iniImg = img[VueObj.count];
                                    }
                                    else{
                                        VueObj.count = 0;
                                        VueObj.iniImg = img[VueObj.count];
                                    }
                                },3000)
                            },
                            methods: {
                                changeImg: function(event){
                                    VueObj.count++;
                                    if(VueObj.count < img.length){
                                        VueObj.iniImg = img[VueObj.count];
                                    }
                                    else{
                                        VueObj.count = 0;
                                        VueObj.iniImg = img[VueObj.count];
                                    }
                                }
                            }
                        })
