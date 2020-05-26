'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-26 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1409';
    this._commitGIT = '9777dca58801873b3886443b927695acbdfff5a9';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}