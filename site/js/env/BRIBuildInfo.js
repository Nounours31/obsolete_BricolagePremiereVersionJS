'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-23 12:00:14';
    this._versionBuild = 'jenkins-Bricolage-176';
    this._commitGIT = '1c8571b6bf84e1cf8a1118e0c39582789eacbb45';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}