'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-05 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-1569';
    this._commitGIT = 'a124f459aca48378a66ca9d346cb4a179aad8fc8';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}