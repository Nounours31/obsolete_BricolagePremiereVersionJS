'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-14 16:00:15';
    this._versionBuild = 'jenkins-Bricolage-265';
    this._commitGIT = '12bb5089799db8e1463e3eb0ef78ed41d1f64cad';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}