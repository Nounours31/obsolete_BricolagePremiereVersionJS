'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-10 12:00:07';
    this._versionBuild = 'jenkins-Bricolage-372';
    this._commitGIT = '50f118ddc08514e3aec610039da586dc2444c121';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}