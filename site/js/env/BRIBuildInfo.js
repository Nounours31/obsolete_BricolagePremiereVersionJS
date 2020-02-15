'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-15 16:00:05';
    this._versionBuild = 'jenkins-Bricolage-1005';
    this._commitGIT = 'd9699623c6f454bc6da886b8bcc17b40b03ff247';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}