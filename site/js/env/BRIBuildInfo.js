'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-07 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1456';
    this._commitGIT = 'edc0f374e6ac603364108a15e7897a43c881bf45';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}