'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-19 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1022';
    this._commitGIT = 'e4899f5fa19eda6eedff64e108e8558885340397';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}