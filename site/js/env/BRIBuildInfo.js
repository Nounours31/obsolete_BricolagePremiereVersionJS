'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-14 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1974';
    this._commitGIT = '2e1f93d361dda7c3d7fde56a3de483edbea3c9a5';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}