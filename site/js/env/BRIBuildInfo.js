'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-01-27 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-930';
    this._commitGIT = 'ebcae429427ae95f27b5ff7537e744720640caa8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}