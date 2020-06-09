'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-09 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-1466';
    this._commitGIT = '6690cab02f2391ab2d55f45fd64b201ed56448b9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}