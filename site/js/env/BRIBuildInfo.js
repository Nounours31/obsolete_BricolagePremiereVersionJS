'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-22 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1885';
    this._commitGIT = '62aa4436b51e8210677fedd4363875744ef617ad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}