'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-02 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-1682';
    this._commitGIT = 'c50758be513a0d63986bb4e8c6ef56bf645e1e40';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}