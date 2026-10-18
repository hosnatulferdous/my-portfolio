import * as THREE from 'three';
const canvas=document.querySelector('#scene'),stage=document.querySelector('#stage');
try{
 const renderer=new THREE.WebGLRenderer({canvas,alpha:true,antialias:true});
 renderer.setPixelRatio(Math.min(devicePixelRatio||1,1.6));renderer.setSize(stage.clientWidth,stage.clientHeight,false);
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(38,stage.clientWidth/stage.clientHeight,.1,100);camera.position.z=8;
 scene.add(new THREE.AmbientLight(0x91a9ff,1.5));
 const l1=new THREE.PointLight(0x62eee8,18,20);l1.position.set(2.8,2.3,3);scene.add(l1);
 const l2=new THREE.PointLight(0x9277ff,12,18);l2.position.set(-3,-1.8,1);scene.add(l2);
 const group=new THREE.Group();scene.add(group);
 const core=new THREE.Mesh(new THREE.IcosahedronGeometry(1.02,2),new THREE.MeshPhysicalMaterial({color:0x6c9dff,metalness:.42,roughness:.22,transparent:true,opacity:.52,emissive:0x122b66,emissiveIntensity:.8,flatShading:true}));core.position.set(1.25,0,-.7);group.add(core);
 const wire=new THREE.Mesh(new THREE.IcosahedronGeometry(1.16,1),new THREE.MeshBasicMaterial({color:0x83f5ee,wireframe:true,transparent:true,opacity:.4}));wire.position.copy(core.position);group.add(wire);
 const ring1=new THREE.Mesh(new THREE.TorusGeometry(1.45,.008,8,110),new THREE.MeshBasicMaterial({color:0x8da9ff,transparent:true,opacity:.5}));ring1.position.copy(core.position);ring1.rotation.set(.9,.25,-.4);group.add(ring1);
 const ring2=new THREE.Mesh(new THREE.TorusGeometry(1.65,.006,8,110),new THREE.MeshBasicMaterial({color:0x6ce8e0,transparent:true,opacity:.35}));ring2.position.copy(core.position);ring2.rotation.set(.1,1.1,.6);group.add(ring2);
 const count=300,pos=new Float32Array(count*3),col=new Float32Array(count*3);
 for(let i=0;i<count;i++){const r=1.5+Math.random()*2.4,a=Math.random()*Math.PI*2;pos[i*3]=1.2+Math.cos(a)*r;pos[i*3+1]=(Math.random()-.5)*5.4;pos[i*3+2]=(Math.random()-.5)*2.5;const c=new THREE.Color().setHSL(.48+Math.random()*.18,.8,.58+Math.random()*.2);col.set([c.r,c.g,c.b],i*3)}
 const pg=new THREE.BufferGeometry();pg.setAttribute('position',new THREE.BufferAttribute(pos,3));pg.setAttribute('color',new THREE.BufferAttribute(col,3));
 const particles=new THREE.Points(pg,new THREE.PointsMaterial({size:.025,vertexColors:true,transparent:true,opacity:.8}));scene.add(particles);
 let tx=0,ty=0,px=0,py=0;stage.addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect();tx=((e.clientX-r.left)/r.width-.5)*.5;ty=((e.clientY-r.top)/r.height-.4)*.35});stage.addEventListener('pointerleave',()=>{tx=ty=0});
 function resize(){const w=stage.clientWidth,h=stage.clientHeight;camera.aspect=w/h;camera.position.z=innerWidth<650?9:8;camera.updateProjectionMatrix();renderer.setSize(w,h,false)}addEventListener('resize',resize);
 const clock=new THREE.Clock(),reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
 function render(){requestAnimationFrame(render);const t=clock.getElapsedTime();px+=(tx-px)*.035;py+=(ty-py)*.035;if(!reduce){core.rotation.x=t*.13+py;core.rotation.y=t*.18+px;group.rotation.y=px*.35;group.rotation.x=py*.35;particles.rotation.y=t*.018;particles.rotation.x=Math.sin(t*.12)*.05}renderer.render(scene,camera)}render();
}catch(e){console.warn('3D unavailable; CSS fallback active.',e);canvas.style.display='none'}
const menu=document.querySelector('#menu'),nav=document.querySelector('#nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelector('#year').textContent=new Date().getFullYear();
const linkedinUrl='';const linkedin=document.querySelector('#linkedin');if(linkedinUrl){linkedin.href=linkedinUrl;linkedin.target='_blank';linkedin.rel='noopener'}else linkedin.addEventListener('click',e=>{e.preventDefault();alert('Add your LinkedIn profile URL in script.js before publishing.')});
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
