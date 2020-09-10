'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-10 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1836';
    this._commitGIT = '122d45d21b2fbc711e204c8498e6b6b3c1af63ca';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}