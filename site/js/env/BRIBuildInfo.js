'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-08-20 20:00:05';
    this._versionBuild = 'jenkins-Bricolage-290';
    this._commitGIT = '08f60f22d5f7db4711cd7932aad701655ac905d6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}