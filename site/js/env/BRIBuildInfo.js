'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-20 08:00:11';
    this._versionBuild = 'jenkins-Bricolage-163';
    this._commitGIT = 'b512fb28adf8c3a6303b36be3d64b06012214a73';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}