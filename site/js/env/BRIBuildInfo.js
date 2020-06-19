'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-19 12:00:09';
    this._versionBuild = 'jenkins-Bricolage-1504';
    this._commitGIT = '48fe76e5d26d2c184e3c746ec04743894e34849a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}