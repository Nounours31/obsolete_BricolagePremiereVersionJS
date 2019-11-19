'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-11-19 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-652';
    this._commitGIT = '88a69c6afe7a105170b8158c3d1cde1e867f91aa';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}