'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-29 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-1787';
    this._commitGIT = '66f40269ec94f9f8e6c7bd9580a101247172f797';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}