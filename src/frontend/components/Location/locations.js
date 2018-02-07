import React, { Component } from 'react';
import { Polygon, Popup } from 'react-leaflet'
import Location from './location'


class Locations extends React.Component {
  render() {
    var latlngs = [[
              -119.8452604,
              34.4143356
            ],
            [
              -119.8452605,
              34.4144189
            ],
            [
              -119.8451387,
              34.4144196
            ],
            [
              -119.8451385,
              34.4144076
            ],
            [
              -119.8450475,
              34.4144076
            ],
            [
              -119.8450483,
              34.4144842
            ],
            [
              -119.845063,
              34.4144844
            ],
            [
              -119.8450638,
              34.4146213
            ],
            [
              -119.8452448,
              34.4146212
            ],
            [
              -119.8453692,
              34.414621
            ],
            [
              -119.8453687,
              34.4146379
            ],
            [
              -119.8456087,
              34.4146363
            ],
            [
              -119.8456103,
              34.414646
            ],
            [
              -119.8458708,
              34.4146455
            ],
            [
              -119.8458703,
              34.4144492
            ],
            [
              -119.845851,
              34.4144493
            ],
            [
              -119.8458502,
              34.4144376
            ],
            [
              -119.8457137,
              34.4144378
            ],
            [
              -119.8457131,
              34.4144216
            ],
            [
              -119.8456567,
              34.4144219
            ],
            [
              -119.8456563,
              34.4144184
            ],
            [
              -119.8455656,
              34.414419
            ],
            [
              -119.8455652,
              34.4143337
            ],
            [
              -119.8458414,
              34.4143319
            ],
            [
              -119.8458447,
              34.4137411
            ],
            [
              -119.8457853,
              34.4137414
            ],
            [
              -119.8457843,
              34.413632
            ],
            [
              -119.8458212,
              34.4136317
            ],
            [
              -119.8458193,
              34.4134272
            ],
            [
              -119.8457347,
              34.4134278
            ],
            [
              -119.8457346,
              34.4134187
            ],
            [
              -119.8457341,
              34.4133591
            ],
            [
              -119.8457336,
              34.4133088
            ],
            [
              -119.845817,
              34.4132417
            ],
            [
              -119.8458167,
              34.4132125
            ],
            [
              -119.8458151,
              34.4130278
            ],
            [
              -119.8456819,
              34.4129186
            ],
            [
              -119.8455718,
              34.4129193
            ],
            [
              -119.8455349,
              34.4128884
            ],
            [
              -119.8454221,
              34.4128891
            ],
            [
              -119.8453843,
              34.4129201
            ],
            [
              -119.8452749,
              34.4129182
            ],
            [
              -119.8451376,
              34.4130322
            ],
            [
              -119.8451387,
              34.4131573
            ],
            [
              -119.8452122,
              34.4132171
            ],
            [
              -119.8452125,
              34.4132496
            ],
            [
              -119.8451475,
              34.4133079
            ],
            [
              -119.8451486,
              34.4134281
            ],
            [
              -119.8451238,
              34.4134284
            ],
            [
              -119.8451233,
              34.413633
            ],
            [
              -119.8452121,
              34.4136318
            ],
            [
              -119.8452124,
              34.4136713
            ],
            [
              -119.8452131,
              34.4137449
            ],
            [
              -119.8451998,
              34.4137449
            ],
            [
              -119.8452044,
              34.4142384
            ],
            [
              -119.8451689,
              34.4142386
            ],
            [
              -119.8451698,
              34.4143362
            ],
            [
              -119.8452604,
              34.4143356
            ]];    

    var positionList = []

    latlngs.forEach(latlng => {
      positionList.push([latlng[1], latlng[0]])
    })
    
    
    
    return (
      <div>
      
        <Location name='UCSB Library' positionList={positionList} />
      </div>
    );
  }
}


export default Locations