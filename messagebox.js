/**
 * Created by Dong Hoang on 23/09/2015.
 */
MessageBoxButton={Ok: 'btnOk', YesNo: 'btnYesNo',}
MessageBox={
    config:{
        lang: 'vi',
    },
    language:{
        vi:{
            OK: 'Đồng ý',
            Yes: 'Xác nhận',
            No: 'Hủy',
            ErrorBox: 'Lỗi',
            SuccessBox: 'Thành công',
            WarringBox: 'Cảnh báo',
            InfoBox: 'Thông tin',
            ErorMsg: 'MessageBox yêu cầu jQuery để hoạt động'
        },
        en:{
            OK: 'OK',
            Yes: 'Yes',
            No: 'No',
            ErrorBox: 'Error',
            SuccessBox: 'Success',
            WarringBox: 'Warring',
            InfoBox: 'Infomation',
            ErorMsg: 'MessageBox require jQuery to run'
        }

    },
    error:'ErrorBox',
    success: 'SuccessBox',
    warring: 'WarringBox',
    info: 'InfoBox',
    Show: function(message,button,type,callback){
        var string=this.language.vi;
        if(this.language[this.config['lang']]!=null) var string=this.language[this.config['lang']];
        var html='<div id="messagebox_mask" style="position: fixed; z-index: 99999; top: 0px; left: 0px; background: rgba(0, 0, 0, 0.53) none repeat scroll 0% 0%; width: 100%; height: 100%;">';
        if(type==this.error){
            html+='<div id="messagebox" title="'+string.ErrorBox+'" style="height: 100px; background:rgba(255, 255, 255, 0.88) none repeat scroll 0% 0%; position: relative; top: 40%; left: 35%; width: 400px; font-style: italic; font-weight: 600; padding: 5px; border: 1px solid rgb(255, 1, 16);">';
        }
        else{
            if(type==this.warring){
                html+='<div id="messagebox" title="'+string.WarringBox+'" style="height: 100px; background: rgba(255, 255, 255, 0.88) none repeat scroll 0% 0%; position: relative; top: 40%; left: 35%; width: 400px; font-style: italic; font-weight: 600; padding: 5px; border: 1px solid rgb(255, 190, 14);">';
            }
            else{
                if(type==this.info){
                    html+='<div id="messagebox" title="'+string.InfoBox+'" style="height: 100px; background: rgba(255, 255, 255, 0.88) none repeat scroll 0% 0%; position: relative; top: 40%; left: 35%; width: 400px; font-style: italic; font-weight: 600; padding: 5px; border: 1px solid rgb(3, 242, 255);">';
                }
                else{
                    html+='<div id="messagebox" title="'+string.SuccessBox+'" style="height: 100px; background: rgba(255, 255, 255, 0.88) none repeat scroll 0% 0%; position: relative; top: 40%; left: 35%; width: 400px; font-style: italic; font-weight: 600; padding: 5px; border: 1px solid rgb(0, 128, 0);">';
                }
            }
        }
        html+='<div id="message" style="max-height: position: relative; font-size: 13px; font-style: normal; font-weight: 400;">'+message+'</span>';
        if(button==MessageBoxButton.Ok){
            html+='<div style="position: absolute; color: white; background-color: green; width: 65px; padding: 4px; left: 165px; text-align: center; cursor: pointer; top: 65px; border: 2px solid white;" id="messagebox-btn-ok" title="'+string.OK+'">'+string.OK+'</div>';
        }
        if(button==MessageBoxButton.YesNo){
            html+='<span style="position: absolute; color: white; background-color: green; width: 65px; padding: 4px; left: 130px; text-align: center; border: 2px solid white; cursor: pointer; top: 65px; font-style: normal;" id="messagebox-btn-yes" title="'+string.Yes+'">'+string.Yes+'</span>';
            html+='<span style="color: white; background-color: rgb(251, 3, 3); width: 65px; padding: 4px; position: absolute; left: 212px; text-align: center; border: 2px solid white; cursor: pointer; top: 65px; font-style: normal;" id="messagebox-btn-no" title="'+string.No+'">'+string.No+'</span>';
        }
        html+='</div></div>';
        basediv=document.createElement('div');
        basediv.id="messagebox_base";
        basediv.innerHTML=html;
        document.body.insertBefore(basediv,document.body.firstChild);
        document.body.style.overflow="hidden";
        if(callback==null) callback={};
        var close=function(){
            document.body.removeChild(document.querySelector('#messagebox_base'));
            document.body.style.overflow='auto';
        };
        if(button==MessageBoxButton.Ok){
            document.querySelector('#messagebox-btn-ok').onclick=function(){
                close();
                if(callback.Ok!=null) callback.Ok();
            };
        }
        if(button==MessageBoxButton.YesNo) {
            document.querySelector('#messagebox-btn-yes').onclick = function () {
                close();
                if (callback.Yes != null) callback.Yes();
            };
            document.querySelector('#messagebox-btn-no').onclick = function () {
                close();
                if (callback.No != null) callback.No();
            };
        }
    }

}

