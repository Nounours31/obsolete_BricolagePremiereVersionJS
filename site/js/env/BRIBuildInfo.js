'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-17 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1866';
    this._commitGIT = 'd3a15c030028e78696b7bed10d8ba78f63da8d59';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}