'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-14 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-1972';
    this._commitGIT = 'd35578f9c64715a5d0adc90e16127785971bc0d8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}