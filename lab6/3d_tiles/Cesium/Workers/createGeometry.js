define(["./defaultValue-f6d5e6da","./PrimitivePipeline-25e99fc7","./createTaskProcessorWorker","./Transforms-c842a68c","./Matrix3-b2351961","./Math-355606c6","./Matrix2-7a8e9daf","./RuntimeError-9b4ce3fb","./combine-0c102d93","./ComponentDatatype-ab629b88","./WebGLConstants-7f557f93","./GeometryAttribute-0e790d82","./GeometryAttributes-1e4ddcd2","./GeometryPipeline-87cdea8e","./AttributeCompression-0b8f7b7d","./EncodedCartesian3-abad5e8c","./IndexDatatype-a9b1bc18","./IntersectionTests-863687a2","./Plane-5931b53e","./WebMercatorProjection-db7467f4"],(function(e,t,r,n,o,i,s,a,u,c,f,m,l,d,p,b,y,P,k,C){"use strict";const G={};function W(t){let r=G[t];return e.defined(r)||("object"==typeof exports?G[r]=r=require(`Workers/${t}`):require([`Workers/${t}`],(function(e){r=e,G[r]=e}))),r}return r((function(r,n){const o=r.subTasks,i=o.length,s=new Array(i);for(let t=0;t<i;t++){const r=o[t],n=r.geometry,i=r.moduleName;if(e.defined(i)){const e=W(i);s[t]=e(n,r.offset)}else s[t]=n}return Promise.all(s).then((function(e){return t.PrimitivePipeline.packCreateGeometryResults(e,n)}))}))}));