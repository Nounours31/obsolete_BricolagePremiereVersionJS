'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-09 08:00:06';
    this._versionBuild = 'jenkins-Bricolage-979';
    this._commitGIT = 'fbf8fab6540c788ca5f5360c84ecffc65940818b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}