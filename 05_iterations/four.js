const myObj={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}
for(const key in myObj){
    console.log(`${key} is shortcut for ${myObj[key]}`);

}
// for in use hoga objects ke liyee

//-----------------
// can we use for in for ARRAY??

const programming=["js","cpp","c","java"];
for(const key in programming){
    console.log(programming[key]);

}
// point to be noted: for of mei key likhne pr he js cpp aa jega
// but for in mei programming[key] likhne pe aya


const mp=new Map()
mp.set('IN',"India")
mp.set('USA',"united state of america");
mp.set('Fr',"france");
mp.set('IN',"India");
for(const key of map){
    console.log(key);
} // yha pe kuch bhi ni hoga,kuiki map is not iteratable 