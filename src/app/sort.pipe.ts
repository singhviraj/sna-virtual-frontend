import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(n: number[]) {

for(let i=0;i<n.length;i++){
  let k =n[i];
  for(let j=i;j< n.length;j++){
    if(n[j]<n[i]){
k=n[i];
n[i]=n[j];
n[j]=k;
    }
  }
}
    return n;
  }

}
