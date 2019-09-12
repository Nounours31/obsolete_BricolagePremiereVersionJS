'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-09-12 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-382';
    this._commitGIT = '9683b694763ee2aecdef9c310fd6c7a3d89c94eb';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}