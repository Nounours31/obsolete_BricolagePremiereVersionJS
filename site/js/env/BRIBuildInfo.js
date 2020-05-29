'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-05-29 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1421';
    this._commitGIT = '443cb5da3d97c3a52d3412132828d010f5066524';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}