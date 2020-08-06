
            var blackImg = "./source/imgs/black.jpeg";
            var whiteImg = "./source/imgs/white.jpeg";
            var greyImg = "./source/imgs/grey.jpeg";
            const list = [
                        [0,1,2],[3,4,5],[6,7,8],[2,5,8],[0,3,6],[1,4,7],[0,4,8],[2,4,6]
                        ];
            var resultName = ["","Black Won","Grey Won"];
            const VueObj = new Vue({
                            el: '#app',
                            data: {
                                result: "Game in process",
                                height: 200,
                                width: 200,
                                playerBlack:true,
                                positionValue: [0,0,0,0,0,0,0,0,0],
                                count:0,
                                gameover:false
                            },
                            mounted(){
                            },
                            methods: {
                                Click:function (num){
                                    if(this.positionValue[num] == 0 && !this.gameover){
                                        if(this.playerBlack){
                                            VueObj.$set(VueObj.positionValue,num,1);
                                        }
                                        else{
                                            VueObj.$set(VueObj.positionValue,num,2);
                                        }
                                        VueObj.playerBlack = !VueObj.playerBlack;
                                        VueObj.count ++;
                                    }
                                },
                                initImg: function (num){
                                    if(this.positionValue[num] == 0){
                                        return whiteImg;
                                    }
                                    else if (this.positionValue[num] == 1){
                                        return blackImg;
                                    }
                                    else{
                                        return greyImg;
                                    }
                                },
                                Restart:function(){
                                    VueObj.result ="Game in process";
                                    VueObj.playerBlack = true;
                                    VueObj.positionValue = [0,0,0,0,0,0,0,0,0];
                                    VueObj.count = 0;
                                    VueObj.gameover = false;
                                    initImg = whiteImg;
                                    $('#restart').attr('hidden','true');
                                    $('#resultDisplay').removeAttr('class');
                                }
                            },
                            computed:{
                                getResult:function(){
                                    if(this.result == "Game in process"){
                                        let array = this.positionValue;
                                        if(!this.gameover){
                                            $.each(list,function(index,item){
                                                if(array[item[0]] == array[item[1]] && array[item[0]] == array[item[2]] && array[item[0]] != 0 && !VueObj.gameover){
                                                    VueObj.result = resultName[array[item[0]]];
                                                    VueObj.gameover = !VueObj.gameover;
                                                    $('#restart').removeAttr('hidden');
                                                    $('#resultDisplay').addClass('text-danger');
                                                    return;
                                                }
                                            });
                                        }
                                        if(this.count == 9 && !this.gameover){
                                                VueObj.result = "Draw";
                                                VueObj.gameover = !VueObj.gameover;
                                                $('#restart').removeAttr('hidden');
                                                $('#resultDisplay').addClass('text-warning');
                                        }
                                    }
                                    else{
                                    }
                                    return this.result;
                                }
                            }
                        })
