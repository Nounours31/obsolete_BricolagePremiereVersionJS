'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-15 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-268';
    this._commitGIT = '786cae527ef2a9fdc64d728b468d4b174433e943';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}