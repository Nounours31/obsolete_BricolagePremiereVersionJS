'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-09 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2198';
    this._commitGIT = '33cf84dea4fc15079c12546947b49c8fc57fc469';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}