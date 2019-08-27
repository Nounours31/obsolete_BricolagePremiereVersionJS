'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-27 12:00:05';
    this._versionBuild = 'jenkins-Bricolage-316';
    this._commitGIT = '94d091841dae0f18100ba3c2ceee7eebfabe1674';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}