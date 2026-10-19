import {initializeApp} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js';
import {getFirestore,doc,getDoc} from 'https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js';
const app=initializeApp({"apiKey": "AIzaSyCqD12nwoPIBg8cROZCOTk2G4AdLuHHKVs", "authDomain": "virtual-phone-cb270.firebaseapp.com", "projectId": "virtual-phone-cb270", "storageBucket": "virtual-phone-cb270.firebasestorage.app", "messagingSenderId": "392468924659", "appId": "1:392468924659:web:e055445d84a1f478044f86"});const db=getFirestore(app);
const note=document.getElementById('remoteNotice');function show(t){note.textContent=t;note.style.display='block'}
const id=new URLSearchParams(location.search).get('id');
if(!id){show('캐릭터 링크가 필요합니다. 관리자에서 공유 링크를 생성하세요.');}
else if(!/^[a-zA-Z0-9_-]{8,80}$/.test(id)){show('유효하지 않은 링크입니다.');}
else {try{const snap=await getDoc(doc(db,'phones',id));if(!snap.exists()||snap.data().published!==true){show('공개되지 않았거나 존재하지 않는 휴대폰입니다.')}else{window.applyRemoteData(snap.data());}}catch(e){show('휴대폰 정보를 불러오지 못했습니다. ('+(e.code||'연결 오류')+')');console.error(e)}}
