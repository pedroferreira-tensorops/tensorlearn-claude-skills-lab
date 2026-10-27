export function checkMessage(input){
 const body=input?.body;
 const violations=[];
 if(typeof body!=='string'||!body.trim())violations.push('invalid-body');
 else if(/glucose|hemoglobin|positive result|diabetes|metformin|chemotherapy|\d+(?:\.\d+)?\s*(?:mmol\/L|mg\/dL)/i.test(body))violations.push('clinical-content');
 return {allowed:violations.length===0,violations};
}
