!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){var t,n=navigator.userAgent,a=/iphone/i.test(n),i=/chrome/i.test(n),r=/android/i.test(n);e.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},e.fn.extend({caret:function(e,t){var n;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof e?(t="number"==typeof t?t:e,this.each(function(){this.setSelectionRange?this.setSelectionRange(e,t):this.createTextRange&&(n=this.createTextRange(),n.collapse(!0),n.moveEnd("character",t),n.moveStart("character",e),n.select())})):(this[0].setSelectionRange?(e=this[0].selectionStart,t=this[0].selectionEnd):document.selection&&document.selection.createRange&&(n=document.selection.createRange(),e=0-n.duplicate().moveStart("character",-1e5),t=e+n.text.length),{begin:e,end:t})},unmask:function(){return this.trigger("unmask")},mask:function(n,o){var c,l,u,f,s,h,g,m;if(!n&&this.length>0){c=e(this[0]);var d=c.data(e.mask.dataName);return d?d():void 0}return o=e.extend({autoclear:e.mask.autoclear,placeholder:e.mask.placeholder,completed:null},o),l=e.mask.definitions,u=[],f=g=n.length,s=null,e.each(n.split(""),function(e,t){"?"==t?(g--,f=e):l[t]?(u.push(new RegExp(l[t])),null===s&&(s=u.length-1),f>e&&(h=u.length-1)):u.push(null)}),this.trigger("unmask").each(function(){function c(){if(o.completed){for(var e=s;h>=e;e++)if(u[e]&&C[e]===d(e))return;o.completed.call(w)}}function d(e){return o.placeholder.charAt(e<o.placeholder.length?e:0)}function p(e){for(;++e<g&&!u[e];);return e}function v(e){for(;--e>=0&&!u[e];);return e}function b(e,t){var n,a;if(!(0>e)){for(n=e,a=p(t);g>n;n++)if(u[n]){if(!(g>a&&u[n].test(C[a])))break;C[n]=C[a],C[a]=d(a),a=p(a)}A(),w.caret(Math.max(s,e))}}function k(e){var t,n,a,i;for(t=e,n=d(e);g>t;t++)if(u[t]){if(a=p(t),i=C[t],C[t]=n,!(g>a&&u[a].test(i)))break;n=i}}function y(){var e=w.val(),t=w.caret();if(m&&m.length&&m.length>e.length){for(T(!0);t.begin>0&&!u[t.begin-1];)t.begin--;if(0===t.begin)for(;t.begin<s&&!u[t.begin];)t.begin++;w.caret(t.begin,t.begin)}else{for(T(!0);t.begin<g&&!u[t.begin];)t.begin++;w.caret(t.begin,t.begin)}c()}function x(){T(),w.val()!=E&&w.change()}function j(e){if(!w.prop("readonly")){var t,n,i,r=e.which||e.keyCode;m=w.val(),8===r||46===r||a&&127===r?(t=w.caret(),n=t.begin,i=t.end,i-n===0&&(n=46!==r?v(n):i=p(n-1),i=46===r?p(i):i),S(n,i),b(n,i-1),e.preventDefault()):13===r?x.call(this,e):27===r&&(w.val(E),w.caret(0,T()),e.preventDefault())}}function R(t){if(!w.prop("readonly")){var n,a,i,o=t.which||t.keyCode,l=w.caret();if(!(t.ctrlKey||t.altKey||t.metaKey||32>o)&&o&&13!==o){if(l.end-l.begin!==0&&(S(l.begin,l.end),b(l.begin,l.end-1)),n=p(l.begin-1),g>n&&(a=String.fromCharCode(o),u[n].test(a))){if(k(n),C[n]=a,A(),i=p(n),r){var f=function(){e.proxy(e.fn.caret,w,i)()};setTimeout(f,0)}else w.caret(i);l.begin<=h&&c()}t.preventDefault()}}}function S(e,t){var n;for(n=e;t>n&&g>n;n++)u[n]&&(C[n]=d(n))}function A(){w.val(C.join(""))}function T(e){var t,n,a,i=w.val(),r=-1;for(t=0,a=0;g>t;t++)if(u[t]){for(C[t]=d(t);a++<i.length;)if(n=i.charAt(a-1),u[t].test(n)){C[t]=n,r=t;break}if(a>i.length){S(t+1,g);break}}else C[t]===i.charAt(a)&&a++,f>t&&(r=t);return e?A():f>r+1?o.autoclear||C.join("")===D?(w.val()&&w.val(""),S(0,g)):A():(A(),w.val(w.val().substring(0,r+1))),f?t:s}var w=e(this),C=e.map(n.split(""),function(e,t){return"?"!=e?l[e]?d(t):e:void 0}),D=C.join(""),E=w.val();w.data(e.mask.dataName,function(){return e.map(C,function(e,t){return u[t]&&e!=d(t)?e:null}).join("")}),w.one("unmask",function(){w.off(".mask").removeData(e.mask.dataName)}).on("focus.mask",function(){if(!w.prop("readonly")){clearTimeout(t);var e;E=w.val(),e=T(),t=setTimeout(function(){w.get(0)===document.activeElement&&(A(),e==n.replace("?","").length?w.caret(0,e):w.caret(e))},10)}}).on("blur.mask",x).on("keydown.mask",j).on("keypress.mask",R).on("input.mask paste.mask",function(){w.prop("readonly")||setTimeout(function(){var e=T(!0);w.caret(e),c()},0)}),i&&r&&w.off("input.mask").on("input.mask",y),T()})}})});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBsdWdpbnMvbWFza2VkaW5wdXQuanMiXSwibmFtZXMiOlsiZmFjdG9yeSIsImRlZmluZSIsImFtZCIsImV4cG9ydHMiLCJyZXF1aXJlIiwialF1ZXJ5IiwiJCIsImNhcmV0VGltZW91dElkIiwidWEiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJpUGhvbmUiLCJ0ZXN0IiwiY2hyb21lIiwiYW5kcm9pZCIsIm1hc2siLCJkZWZpbml0aW9ucyIsIjkiLCJhIiwiKiIsImF1dG9jbGVhciIsImRhdGFOYW1lIiwicGxhY2Vob2xkZXIiLCJmbiIsImV4dGVuZCIsImNhcmV0IiwiYmVnaW4iLCJlbmQiLCJyYW5nZSIsInRoaXMiLCJsZW5ndGgiLCJpcyIsImVhY2giLCJzZXRTZWxlY3Rpb25SYW5nZSIsImNyZWF0ZVRleHRSYW5nZSIsImNvbGxhcHNlIiwibW92ZUVuZCIsIm1vdmVTdGFydCIsInNlbGVjdCIsInNlbGVjdGlvblN0YXJ0Iiwic2VsZWN0aW9uRW5kIiwiZG9jdW1lbnQiLCJzZWxlY3Rpb24iLCJjcmVhdGVSYW5nZSIsImR1cGxpY2F0ZSIsInRleHQiLCJ1bm1hc2siLCJ0cmlnZ2VyIiwic2V0dGluZ3MiLCJpbnB1dCIsImRlZnMiLCJ0ZXN0cyIsInBhcnRpYWxQb3NpdGlvbiIsImZpcnN0Tm9uTWFza1BvcyIsImxhc3RSZXF1aXJlZE5vbk1hc2tQb3MiLCJsZW4iLCJvbGRWYWwiLCJkYXRhIiwiY29tcGxldGVkIiwic3BsaXQiLCJpIiwiYyIsInB1c2giLCJSZWdFeHAiLCJ0cnlGaXJlQ29tcGxldGVkIiwiYnVmZmVyIiwiZ2V0UGxhY2Vob2xkZXIiLCJjYWxsIiwiY2hhckF0Iiwic2Vla05leHQiLCJwb3MiLCJzZWVrUHJldiIsInNoaWZ0TCIsImoiLCJ3cml0ZUJ1ZmZlciIsIk1hdGgiLCJtYXgiLCJzaGlmdFIiLCJ0IiwiYW5kcm9pZElucHV0RXZlbnQiLCJjdXJWYWwiLCJ2YWwiLCJjaGVja1ZhbCIsImJsdXJFdmVudCIsImZvY3VzVGV4dCIsImNoYW5nZSIsImtleWRvd25FdmVudCIsImUiLCJwcm9wIiwiayIsIndoaWNoIiwia2V5Q29kZSIsImNsZWFyQnVmZmVyIiwicHJldmVudERlZmF1bHQiLCJrZXlwcmVzc0V2ZW50IiwicCIsIm5leHQiLCJjdHJsS2V5IiwiYWx0S2V5IiwibWV0YUtleSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInByb3h5Iiwic2V0VGltZW91dCIsInN0YXJ0Iiwiam9pbiIsImFsbG93IiwibGFzdE1hdGNoIiwiZGVmYXVsdEJ1ZmZlciIsInN1YnN0cmluZyIsIm1hcCIsIm9uZSIsIm9mZiIsInJlbW92ZURhdGEiLCJvbiIsImNsZWFyVGltZW91dCIsImdldCIsImFjdGl2ZUVsZW1lbnQiLCJyZXBsYWNlIl0sIm1hcHBpbmdzIjoiQ0FNQyxTQUFTQSxHQUNOLGtCQUFxQkMsU0FBVUEsT0FBT0MsSUFBTUQsUUFBUyxVQUFZRCxHQUFXQSxFQUFRLGdCQUFtQkcsU0FBVUMsUUFBUSxVQUFZQyxTQUN2SSxTQUFTQyxHQUNQLEdBQUlDLEdBQWdCQyxFQUFLQyxVQUFVQyxVQUFXQyxFQUFTLFVBQVVDLEtBQUtKLEdBQUtLLEVBQVMsVUFBVUQsS0FBS0osR0FBS00sRUFBVSxXQUFXRixLQUFLSixFQUNsSUYsR0FBRVMsTUFDRUMsYUFDSUMsRUFBSyxRQUNMQyxFQUFHLFdBQ0hDLElBQUssZUFFVEMsV0FBVyxFQUNYQyxTQUFVLFlBQ1ZDLFlBQWEsS0FDZGhCLEVBQUVpQixHQUFHQyxRQUNKQyxNQUFPLFNBQVNDLEVBQU9DLEdBQ25CLEdBQUlDLEVBQ0osSUFBSSxJQUFNQyxLQUFLQyxTQUFXRCxLQUFLRSxHQUFHLFdBQVksTUFBTyxnQkFBbUJMLElBQVNDLEVBQU0sZ0JBQW1CQSxHQUFNQSxFQUFNRCxFQUN0SEcsS0FBS0csS0FBSyxXQUNOSCxLQUFLSSxrQkFBb0JKLEtBQUtJLGtCQUFrQlAsRUFBT0MsR0FBT0UsS0FBS0ssa0JBQW9CTixFQUFRQyxLQUFLSyxrQkFDcEdOLEVBQU1PLFVBQVMsR0FBS1AsRUFBTVEsUUFB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RUFBWW5DLEVBQU1nQyxLQUN2RGhDLEdBQU1RLEtBQUtuRCxFQUFFUyxLQUFLTSxTQUFVLFdBQ3hCLE1BQU9mLEdBQUV3RyxJQUFJN0MsRUFBUSxTQUFTSixFQUFHRCxHQUM3QixNQUFPVCxHQUFNUyxJQUFNQyxHQUFLSyxFQUFlTixHQUFLQyxFQUFJLE9BQ2pENEMsS0FBSyxNQUNSeEQsRUFBTThELElBQUksU0FBVSxXQUNwQjlELEVBQU0rRCxJQUFJLFNBQVNDLFdBQVczRyxFQUFFUyxLQUFLTSxZQUN0QzZGLEdBQUcsYUFBYyxXQUNoQixJQUFLakUsRUFBTXVDLEtBQUssWUFBYSxDQUN6QjJCLGFBQWE1RyxFQUNiLElBQUkrRCxFQUNKYyxHQUFZbkMsRUFBTWdDLE1BQU9YLEVBQU1ZLElBQVkzRSxFQUFpQmdHLFdBQVcsV0FDbkV0RCxFQUFNbUUsSUFBSSxLQUFPM0UsU0FBUzRFLGdCQUFrQjNDLElBQWVKLEdBQU92RCxFQUFLdUcsUUFBUSxJQUFLLElBQUl4RixPQUFTbUIsRUFBTXhCLE1BQU0sRUFBRzZDLEdBQU9yQixFQUFNeEIsTUFBTTZDLEtBQ3BJLE9BRVI0QyxHQUFHLFlBQWEvQixHQUFXK0IsR0FBRyxlQUFnQjVCLEdBQWM0QixHQUFHLGdCQUFpQnBCLEdBQWVvQixHQUFHLHdCQUF5QixXQUMxSGpFLEVBQU11QyxLQUFLLGFBQWVlLFdBQVcsV0FDakMsR0FBSWpDLEdBQU1ZLEdBQVMsRUFDbkJqQyxHQUFNeEIsTUFBTTZDLEdBQU1OLEtBQ25CLEtBQ0huRCxHQUFVQyxHQUFXbUMsRUFBTStELElBQUksY0FBY0UsR0FBRyxhQUFjbkMsR0FDbEVHIiwiZmlsZSI6InBsdWdpbnMvbWFza2VkaW5wdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgalF1ZXJ5IE1hc2tlZCBJbnB1dCBQbHVnaW5cclxuICAgIENvcHlyaWdodCAoYykgMjAwNyAtIDIwMTUgSm9zaCBCdXNoIChkaWdpdGFsYnVzaC5jb20pXHJcbiAgICBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgKGh0dHA6Ly9kaWdpdGFsYnVzaC5jb20vcHJvamVjdHMvbWFza2VkLWlucHV0LXBsdWdpbi8jbGljZW5zZSlcclxuICAgIFZlcnNpb246IDEuNC4xXHJcbiovXHJcbiFmdW5jdGlvbihmYWN0b3J5KSB7XHJcbiAgICBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGRlZmluZSAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKFsgXCJqcXVlcnlcIiBdLCBmYWN0b3J5KSA6IGZhY3RvcnkoXCJvYmplY3RcIiA9PSB0eXBlb2YgZXhwb3J0cyA/IHJlcXVpcmUoXCJqcXVlcnlcIikgOiBqUXVlcnkpO1xyXG59KGZ1bmN0aW9uKCQpIHtcclxuICAgIHZhciBjYXJldFRpbWVvdXRJZCwgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50LCBpUGhvbmUgPSAvaXBob25lL2kudGVzdCh1YSksIGNocm9tZSA9IC9jaHJvbWUvaS50ZXN0KHVhKSwgYW5kcm9pZCA9IC9hbmRyb2lkL2kudGVzdCh1YSk7XHJcbiAgICAkLm1hc2sgPSB7XHJcbiAgICAgICAgZGVmaW5pdGlvbnM6IHtcclxuICAgICAgICAgICAgXCI5XCI6IFwiWzAtOV1cIixcclxuICAgICAgICAgICAgYTogXCJbQS1aYS16XVwiLFxyXG4gICAgICAgICAgICBcIipcIjogXCJbQS1aYS16MC05XVwiXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhdXRvY2xlYXI6ICEwLFxyXG4gICAgICAgIGRhdGFOYW1lOiBcInJhd01hc2tGblwiLFxyXG4gICAgICAgIHBsYWNlaG9sZGVyOiBcIl9cIlxyXG4gICAgfSwgJC5mbi5leHRlbmQoe1xyXG4gICAgICAgIGNhcmV0OiBmdW5jdGlvbihiZWdpbiwgZW5kKSB7XHJcbiAgICAgICAgICAgIHZhciByYW5nZTtcclxuICAgICAgICAgICAgaWYgKDAgIT09IHRoaXMubGVuZ3RoICYmICF0aGlzLmlzKFwiOmhpZGRlblwiKSkgcmV0dXJuIFwibnVtYmVyXCIgPT0gdHlwZW9mIGJlZ2luID8gKGVuZCA9IFwibnVtYmVyXCIgPT0gdHlwZW9mIGVuZCA/IGVuZCA6IGJlZ2luLCBcclxuICAgICAgICAgICAgdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSA/IHRoaXMuc2V0U2VsZWN0aW9uUmFuZ2UoYmVnaW4sIGVuZCkgOiB0aGlzLmNyZWF0ZVRleHRSYW5nZSAmJiAocmFuZ2UgPSB0aGlzLmNyZWF0ZVRleHRSYW5nZSgpLCBcclxuICAgICAgICAgICAgICAgIHJhbmdlLmNvbGxhcHNlKCEwKSwgcmFuZ2UubW92ZUVuZChcImNoYXJhY3RlclwiLCBlbmQpLCByYW5nZS5tb3ZlU3RhcnQoXCJjaGFyYWN0ZXJcIiwgYmVnaW4pLCBcclxuICAgICAgICAgICAgICAgIHJhbmdlLnNlbGVjdCgpKTtcclxuICAgICAgICAgICAgfSkpIDogKHRoaXNbMF0uc2V0U2VsZWN0aW9uUmFuZ2UgPyAoYmVnaW4gPSB0aGlzWzBdLnNlbGVjdGlvblN0YXJ0LCBlbmQgPSB0aGlzWzBdLnNlbGVjdGlvbkVuZCkgOiBkb2N1bWVudC5zZWxlY3Rpb24gJiYgZG9jdW1lbnQuc2VsZWN0aW9uLmNyZWF0ZVJhbmdlICYmIChyYW5nZSA9IGRvY3VtZW50LnNlbGVjdGlvbi5jcmVhdGVSYW5nZSgpLCBcclxuICAgICAgICAgICAgYmVnaW4gPSAwIC0gcmFuZ2UuZHVwbGljYXRlKCkubW92ZVN0YXJ0KFwiY2hhcmFjdGVyXCIsIC0xZTUpLCBlbmQgPSBiZWdpbiArIHJhbmdlLnRleHQubGVuZ3RoKSwgXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGJlZ2luOiBiZWdpbixcclxuICAgICAgICAgICAgICAgIGVuZDogZW5kXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdW5tYXNrOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcihcInVubWFza1wiKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG1hc2s6IGZ1bmN0aW9uKG1hc2ssIHNldHRpbmdzKSB7XHJcbiAgICAgICAgICAgIHZhciBpbnB1dCwgZGVmcywgdGVzdHMsIHBhcnRpYWxQb3NpdGlvbiwgZmlyc3ROb25NYXNrUG9zLCBsYXN0UmVxdWlyZWROb25NYXNrUG9zLCBsZW4sIG9sZFZhbDtcclxuICAgICAgICAgICAgaWYgKCFtYXNrICYmIHRoaXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQgPSAkKHRoaXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZuID0gaW5wdXQuZGF0YSgkLm1hc2suZGF0YU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZuID8gZm4oKSA6IHZvaWQgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc2V0dGluZ3MgPSAkLmV4dGVuZCh7XHJcbiAgICAgICAgICAgICAgICBhdXRvY2xlYXI6ICQubWFzay5hdXRvY2xlYXIsXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogJC5tYXNrLnBsYWNlaG9sZGVyLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVkOiBudWxsXHJcbiAgICAgICAgICAgIH0sIHNldHRpbmdzKSwgZGVmcyA9ICQubWFzay5kZWZpbml0aW9ucywgdGVzdHMgPSBbXSwgcGFydGlhbFBvc2l0aW9uID0gbGVuID0gbWFzay5sZW5ndGgsIFxyXG4gICAgICAgICAgICBmaXJzdE5vbk1hc2tQb3MgPSBudWxsLCAkLmVhY2gobWFzay5zcGxpdChcIlwiKSwgZnVuY3Rpb24oaSwgYykge1xyXG4gICAgICAgICAgICAgICAgXCI/XCIgPT0gYyA/IChsZW4tLSwgcGFydGlhbFBvc2l0aW9uID0gaSkgOiBkZWZzW2NdID8gKHRlc3RzLnB1c2gobmV3IFJlZ0V4cChkZWZzW2NdKSksIFxyXG4gICAgICAgICAgICAgICAgbnVsbCA9PT0gZmlyc3ROb25NYXNrUG9zICYmIChmaXJzdE5vbk1hc2tQb3MgPSB0ZXN0cy5sZW5ndGggLSAxKSwgcGFydGlhbFBvc2l0aW9uID4gaSAmJiAobGFzdFJlcXVpcmVkTm9uTWFza1BvcyA9IHRlc3RzLmxlbmd0aCAtIDEpKSA6IHRlc3RzLnB1c2gobnVsbCk7XHJcbiAgICAgICAgICAgIH0pLCB0aGlzLnRyaWdnZXIoXCJ1bm1hc2tcIikuZWFjaChmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHRyeUZpcmVDb21wbGV0ZWQoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNldHRpbmdzLmNvbXBsZXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gZmlyc3ROb25NYXNrUG9zOyBsYXN0UmVxdWlyZWROb25NYXNrUG9zID49IGk7IGkrKykgaWYgKHRlc3RzW2ldICYmIGJ1ZmZlcltpXSA9PT0gZ2V0UGxhY2Vob2xkZXIoaSkpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3MuY29tcGxldGVkLmNhbGwoaW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldFBsYWNlaG9sZGVyKGkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2V0dGluZ3MucGxhY2Vob2xkZXIuY2hhckF0KGkgPCBzZXR0aW5ncy5wbGFjZWhvbGRlci5sZW5ndGggPyBpIDogMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzZWVrTmV4dChwb3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKDsrK3BvcyA8IGxlbiAmJiAhdGVzdHNbcG9zXTsgKSA7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHNlZWtQcmV2KHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoOy0tcG9zID49IDAgJiYgIXRlc3RzW3Bvc107ICkgO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzaGlmdEwoYmVnaW4sIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBqO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKDAgPiBiZWdpbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gYmVnaW4sIGogPSBzZWVrTmV4dChlbmQpOyBsZW4gPiBpOyBpKyspIGlmICh0ZXN0c1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEobGVuID4gaiAmJiB0ZXN0c1tpXS50ZXN0KGJ1ZmZlcltqXSkpKSBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZmZlcltpXSA9IGJ1ZmZlcltqXSwgYnVmZmVyW2pdID0gZ2V0UGxhY2Vob2xkZXIoaiksIGogPSBzZWVrTmV4dChqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3cml0ZUJ1ZmZlcigpLCBpbnB1dC5jYXJldChNYXRoLm1heChmaXJzdE5vbk1hc2tQb3MsIGJlZ2luKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc2hpZnRSKHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBjLCBqLCB0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHBvcywgYyA9IGdldFBsYWNlaG9sZGVyKHBvcyk7IGxlbiA+IGk7IGkrKykgaWYgKHRlc3RzW2ldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChqID0gc2Vla05leHQoaSksIHQgPSBidWZmZXJbaV0sIGJ1ZmZlcltpXSA9IGMsICEobGVuID4gaiAmJiB0ZXN0c1tqXS50ZXN0KHQpKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGMgPSB0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFuZHJvaWRJbnB1dEV2ZW50KCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjdXJWYWwgPSBpbnB1dC52YWwoKSwgcG9zID0gaW5wdXQuY2FyZXQoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2xkVmFsICYmIG9sZFZhbC5sZW5ndGggJiYgb2xkVmFsLmxlbmd0aCA+IGN1clZhbC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjaGVja1ZhbCghMCk7IHBvcy5iZWdpbiA+IDAgJiYgIXRlc3RzW3Bvcy5iZWdpbiAtIDFdOyApIHBvcy5iZWdpbi0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoMCA9PT0gcG9zLmJlZ2luKSBmb3IgKDtwb3MuYmVnaW4gPCBmaXJzdE5vbk1hc2tQb3MgJiYgIXRlc3RzW3Bvcy5iZWdpbl07ICkgcG9zLmJlZ2luKys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmNhcmV0KHBvcy5iZWdpbiwgcG9zLmJlZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNoZWNrVmFsKCEwKTsgcG9zLmJlZ2luIDwgbGVuICYmICF0ZXN0c1twb3MuYmVnaW5dOyApIHBvcy5iZWdpbisrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5jYXJldChwb3MuYmVnaW4sIHBvcy5iZWdpbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRyeUZpcmVDb21wbGV0ZWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGJsdXJFdmVudCgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja1ZhbCgpLCBpbnB1dC52YWwoKSAhPSBmb2N1c1RleHQgJiYgaW5wdXQuY2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBrZXlkb3duRXZlbnQoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5wdXQucHJvcChcInJlYWRvbmx5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MsIGJlZ2luLCBlbmQsIGsgPSBlLndoaWNoIHx8IGUua2V5Q29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2xkVmFsID0gaW5wdXQudmFsKCksIDggPT09IGsgfHwgNDYgPT09IGsgfHwgaVBob25lICYmIDEyNyA9PT0gayA/IChwb3MgPSBpbnB1dC5jYXJldCgpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmVnaW4gPSBwb3MuYmVnaW4sIGVuZCA9IHBvcy5lbmQsIGVuZCAtIGJlZ2luID09PSAwICYmIChiZWdpbiA9IDQ2ICE9PSBrID8gc2Vla1ByZXYoYmVnaW4pIDogZW5kID0gc2Vla05leHQoYmVnaW4gLSAxKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVuZCA9IDQ2ID09PSBrID8gc2Vla05leHQoZW5kKSA6IGVuZCksIGNsZWFyQnVmZmVyKGJlZ2luLCBlbmQpLCBzaGlmdEwoYmVnaW4sIGVuZCAtIDEpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpKSA6IDEzID09PSBrID8gYmx1ckV2ZW50LmNhbGwodGhpcywgZSkgOiAyNyA9PT0gayAmJiAoaW5wdXQudmFsKGZvY3VzVGV4dCksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5jYXJldCgwLCBjaGVja1ZhbCgpKSwgZS5wcmV2ZW50RGVmYXVsdCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBrZXlwcmVzc0V2ZW50KGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlucHV0LnByb3AoXCJyZWFkb25seVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcCwgYywgbmV4dCwgayA9IGUud2hpY2ggfHwgZS5rZXlDb2RlLCBwb3MgPSBpbnB1dC5jYXJldCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShlLmN0cmxLZXkgfHwgZS5hbHRLZXkgfHwgZS5tZXRhS2V5IHx8IDMyID4gaykgJiYgayAmJiAxMyAhPT0gaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcy5lbmQgLSBwb3MuYmVnaW4gIT09IDAgJiYgKGNsZWFyQnVmZmVyKHBvcy5iZWdpbiwgcG9zLmVuZCksIHNoaWZ0TChwb3MuYmVnaW4sIHBvcy5lbmQgLSAxKSksIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcCA9IHNlZWtOZXh0KHBvcy5iZWdpbiAtIDEpLCBsZW4gPiBwICYmIChjID0gU3RyaW5nLmZyb21DaGFyQ29kZShrKSwgdGVzdHNbcF0udGVzdChjKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hpZnRSKHApLCBidWZmZXJbcF0gPSBjLCB3cml0ZUJ1ZmZlcigpLCBuZXh0ID0gc2Vla05leHQocCksIGFuZHJvaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHByb3h5ID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkLnByb3h5KCQuZm4uY2FyZXQsIGlucHV0LCBuZXh0KSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KHByb3h5LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaW5wdXQuY2FyZXQobmV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zLmJlZ2luIDw9IGxhc3RSZXF1aXJlZE5vbk1hc2tQb3MgJiYgdHJ5RmlyZUNvbXBsZXRlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gY2xlYXJCdWZmZXIoc3RhcnQsIGVuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoaSA9IHN0YXJ0OyBlbmQgPiBpICYmIGxlbiA+IGk7IGkrKykgdGVzdHNbaV0gJiYgKGJ1ZmZlcltpXSA9IGdldFBsYWNlaG9sZGVyKGkpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHdyaXRlQnVmZmVyKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0LnZhbChidWZmZXIuam9pbihcIlwiKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBjaGVja1ZhbChhbGxvdykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpLCBjLCBwb3MsIHRlc3QgPSBpbnB1dC52YWwoKSwgbGFzdE1hdGNoID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgcG9zID0gMDsgbGVuID4gaTsgaSsrKSBpZiAodGVzdHNbaV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChidWZmZXJbaV0gPSBnZXRQbGFjZWhvbGRlcihpKTsgcG9zKysgPCB0ZXN0Lmxlbmd0aDsgKSBpZiAoYyA9IHRlc3QuY2hhckF0KHBvcyAtIDEpLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVzdHNbaV0udGVzdChjKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnVmZmVyW2ldID0gYywgbGFzdE1hdGNoID0gaTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3MgPiB0ZXN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJCdWZmZXIoaSArIDEsIGxlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBidWZmZXJbaV0gPT09IHRlc3QuY2hhckF0KHBvcykgJiYgcG9zKyssIHBhcnRpYWxQb3NpdGlvbiA+IGkgJiYgKGxhc3RNYXRjaCA9IGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhbGxvdyA/IHdyaXRlQnVmZmVyKCkgOiBwYXJ0aWFsUG9zaXRpb24gPiBsYXN0TWF0Y2ggKyAxID8gc2V0dGluZ3MuYXV0b2NsZWFyIHx8IGJ1ZmZlci5qb2luKFwiXCIpID09PSBkZWZhdWx0QnVmZmVyID8gKGlucHV0LnZhbCgpICYmIGlucHV0LnZhbChcIlwiKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJCdWZmZXIoMCwgbGVuKSkgOiB3cml0ZUJ1ZmZlcigpIDogKHdyaXRlQnVmZmVyKCksIGlucHV0LnZhbChpbnB1dC52YWwoKS5zdWJzdHJpbmcoMCwgbGFzdE1hdGNoICsgMSkpKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgcGFydGlhbFBvc2l0aW9uID8gaSA6IGZpcnN0Tm9uTWFza1BvcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9ICQodGhpcyksIGJ1ZmZlciA9ICQubWFwKG1hc2suc3BsaXQoXCJcIiksIGZ1bmN0aW9uKGMsIGkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCI/XCIgIT0gYyA/IGRlZnNbY10gPyBnZXRQbGFjZWhvbGRlcihpKSA6IGMgOiB2b2lkIDA7XHJcbiAgICAgICAgICAgICAgICB9KSwgZGVmYXVsdEJ1ZmZlciA9IGJ1ZmZlci5qb2luKFwiXCIpLCBmb2N1c1RleHQgPSBpbnB1dC52YWwoKTtcclxuICAgICAgICAgICAgICAgIGlucHV0LmRhdGEoJC5tYXNrLmRhdGFOYW1lLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJC5tYXAoYnVmZmVyLCBmdW5jdGlvbihjLCBpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0ZXN0c1tpXSAmJiBjICE9IGdldFBsYWNlaG9sZGVyKGkpID8gYyA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfSkuam9pbihcIlwiKTtcclxuICAgICAgICAgICAgICAgIH0pLCBpbnB1dC5vbmUoXCJ1bm1hc2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQub2ZmKFwiLm1hc2tcIikucmVtb3ZlRGF0YSgkLm1hc2suZGF0YU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfSkub24oXCJmb2N1cy5tYXNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaW5wdXQucHJvcChcInJlYWRvbmx5XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChjYXJldFRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3M7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzVGV4dCA9IGlucHV0LnZhbCgpLCBwb3MgPSBjaGVja1ZhbCgpLCBjYXJldFRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC5nZXQoMCkgPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKHdyaXRlQnVmZmVyKCksIHBvcyA9PSBtYXNrLnJlcGxhY2UoXCI/XCIsIFwiXCIpLmxlbmd0aCA/IGlucHV0LmNhcmV0KDAsIHBvcykgOiBpbnB1dC5jYXJldChwb3MpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLm9uKFwiYmx1ci5tYXNrXCIsIGJsdXJFdmVudCkub24oXCJrZXlkb3duLm1hc2tcIiwga2V5ZG93bkV2ZW50KS5vbihcImtleXByZXNzLm1hc2tcIiwga2V5cHJlc3NFdmVudCkub24oXCJpbnB1dC5tYXNrIHBhc3RlLm1hc2tcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQucHJvcChcInJlYWRvbmx5XCIpIHx8IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwb3MgPSBjaGVja1ZhbCghMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0LmNhcmV0KHBvcyksIHRyeUZpcmVDb21wbGV0ZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH0pLCBjaHJvbWUgJiYgYW5kcm9pZCAmJiBpbnB1dC5vZmYoXCJpbnB1dC5tYXNrXCIpLm9uKFwiaW5wdXQubWFza1wiLCBhbmRyb2lkSW5wdXRFdmVudCksIFxyXG4gICAgICAgICAgICAgICAgY2hlY2tWYWwoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pOyJdfQ==
