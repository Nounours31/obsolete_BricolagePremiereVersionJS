'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-10 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2082';
    this._commitGIT = 'f9b16589b1a148b0f3c230ee6c2bac386d3ff11e';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}