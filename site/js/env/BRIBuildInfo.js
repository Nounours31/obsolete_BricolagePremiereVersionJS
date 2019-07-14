'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-14 20:00:09';
    this._versionBuild = 'jenkins-Bricolage-142';
    this._commitGIT = 'def1141b0a2f7b0c49329164dd687612eb3936b0';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}