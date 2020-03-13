'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-13 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1111';
    this._commitGIT = 'f36d7384534e5f4d5ae4dd84fbb4080171931200';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}