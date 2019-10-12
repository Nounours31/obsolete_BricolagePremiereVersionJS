'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-10-12 12:00:04';
    this._versionBuild = 'jenkins-Bricolage-500';
    this._commitGIT = 'c96acab1a0918d6c7fde1f04a79cf36a74a3986c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}